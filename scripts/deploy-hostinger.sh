#!/usr/bin/env bash
set -euo pipefail

dist_dir=${1:-dist}
sha=${DEPLOY_SHA:?DEPLOY_SHA is required}
run_id=${GITHUB_RUN_ID:?GITHUB_RUN_ID is required}
key=${SSH_KEY_PATH:?SSH_KEY_PATH is required}
known_hosts=${SSH_KNOWN_HOSTS_PATH:?SSH_KNOWN_HOSTS_PATH is required}
[[ $sha =~ ^[0-9a-f]{40}$ && $run_id =~ ^[0-9]+$ ]]
[[ $key =~ ^/[a-zA-Z0-9_./-]+$ && $known_hosts =~ ^/[a-zA-Z0-9_./-]+$ ]]
test -r "$key" && test -r "$known_hosts"
test -s "$dist_dir/index.html" && test -s "$dist_dir/deployment.json"
test -d "$dist_dir/assets" && test ! -L "$dist_dir"
if find "$dist_dir" -type l -print -quit | grep -q .; then
  echo 'Refusing symlinks in dist.' >&2
  exit 1
fi
node --input-type=module -e 'import fs from "node:fs"; if(JSON.parse(fs.readFileSync(process.argv[1])).commit!==process.argv[2]) process.exit(1)' "$dist_dir/deployment.json" "$sha"

remote=u381549037@45.152.44.122
domain=/home/u381549037/domains/genesisleal.com
target=$domain/public_html
stage=$domain/.deploy-$sha-$run_id
stamp=$(date -u +%Y%m%dT%H%M%SZ)
backup=$domain/public_html.bak-$stamp-before-${sha:0:7}-$run_id
ssh_options=(-p 65002 -i "$key" -o "UserKnownHostsFile=$known_hosts" -o StrictHostKeyChecking=yes -o HostKeyAlgorithms=ssh-ed25519 -o BatchMode=yes -o ConnectTimeout=15 -o ServerAliveInterval=15 -o ServerAliveCountMax=3)
rsync_shell="ssh -p 65002 -i $key -o UserKnownHostsFile=$known_hosts -o StrictHostKeyChecking=yes -o HostKeyAlgorithms=ssh-ed25519 -o BatchMode=yes -o ConnectTimeout=15"
excludes=(--exclude='/.well-known/' --exclude='/.htaccess' --exclude='/assets/.htaccess')
work_dir=$(mktemp -d)
may_have_published=false

purge() {
  if [[ -z ${CLOUDFLARE_API_TOKEN:-} ]]; then return; fi
  python3 - <<'PY'
import json, os, urllib.request
try:
    request=urllib.request.Request('https://api.cloudflare.com/client/v4/zones/e2f4c3e1fed53e2f6d1bf09e024ce99c/purge_cache',data=b'{"purge_everything":true}',headers={'Authorization':'Bearer '+os.environ['CLOUDFLARE_API_TOKEN'],'Content-Type':'application/json'},method='POST')
    with urllib.request.urlopen(request,timeout=30) as response:
        success=json.load(response).get('success')
    print('Cloudflare purge confirmed.' if success else 'Cloudflare purge failed; public validation remains required.')
except Exception:
    print('Cloudflare purge unavailable; public validation remains required.')
PY
}

finish() {
  status=$?
  trap - EXIT INT TERM HUP
  if [[ $status -ne 0 && $may_have_published == true ]]; then
    echo "Validation failed; checking rollback from $backup" >&2
    if ssh "${ssh_options[@]}" "$remote" bash -s -- "$sha" "$backup" <<'ROLLBACK'
set -euo pipefail
sha=$1
backup=$2
domain=/home/u381549037/domains/genesisleal.com
target=$domain/public_html
[[ $sha =~ ^[0-9a-f]{40}$ && $backup =~ ^/home/u381549037/domains/genesisleal.com/public_html.bak-[0-9]{8}T[0-9]{6}Z-before-[0-9a-f]{7}-[0-9]+$ ]]
exec 9>"$domain/.deploy.lock"
flock -w 120 9
if test -d "$backup" && grep -q "\"commit\":\"$sha\"" "$target/deployment.json"; then
  rsync -a --delay-updates --delete-after --exclude='/.well-known/' --exclude='/.htaccess' --exclude='/assets/.htaccess' "$backup/" "$target/"
  echo "Rollback restored: $backup"
else
  echo 'Rollback did not overwrite another version or an unchanged origin.'
fi
ROLLBACK
    then purge; else echo "Rollback incomplete. Recover manually from $backup." >&2; fi
  fi
  ssh "${ssh_options[@]}" "$remote" "rm -rf -- '$stage'" || echo "Staging cleanup pending: $stage" >&2
  rm -rf -- "$work_dir"
  exit "$status"
}
trap finish EXIT
trap 'exit 130' INT
trap 'exit 143' TERM
trap 'exit 129' HUP

(cd "$dist_dir"; find . -type f ! -path './.well-known/*' ! -path './.htaccess' ! -path './assets/.htaccess' -print0 | sort -z | xargs -0 sha256sum) > "$work_dir/dist.sha256"
ssh "${ssh_options[@]}" "$remote" "test ! -e '$stage' && mkdir -p '$stage/dist'"
rsync -azc "${excludes[@]}" -e "$rsync_shell" "$dist_dir/" "$remote:$stage/dist/"
ssh "${ssh_options[@]}" "$remote" "cat > '$stage/dist.sha256'" < "$work_dir/dist.sha256"
may_have_published=true
ssh "${ssh_options[@]}" "$remote" bash -s -- "$sha" "$stage" "$backup" <<'PUBLISH'
set -euo pipefail
sha=$1
stage=$2
backup=$3
domain=/home/u381549037/domains/genesisleal.com
target=$domain/public_html
[[ $sha =~ ^[0-9a-f]{40}$ && $stage =~ ^/home/u381549037/domains/genesisleal.com/\.deploy-[0-9a-f]{40}-[0-9]+$ && $backup =~ ^/home/u381549037/domains/genesisleal.com/public_html.bak-[0-9]{8}T[0-9]{6}Z-before-[0-9a-f]{7}-[0-9]+$ ]]
exec 9>"$domain/.deploy.lock"
flock -w 300 9
test -d "$target" && test ! -L "$target"
test -s "$target/.htaccess" && test -s "$target/assets/.htaccess"
(cd "$stage/dist"; sha256sum --check --status ../dist.sha256)
test ! -e "$backup"
cp -a "$target" "$backup"
diff -qr "$target" "$backup"
echo "Verified backup: $backup"
current=$(git ls-remote https://github.com/genesisleal/genesisleal.git refs/heads/main | cut -f1)
if [[ $current != "$sha" ]]; then echo "Obsolete commit $sha; main is $current. No publication." >&2; exit 75; fi
started=false
restore() {
  status=$?
  trap - EXIT INT TERM HUP
  if [[ $status -ne 0 && $started == true ]]; then
    rsync -a --delay-updates --delete-after --exclude='/.well-known/' --exclude='/.htaccess' --exclude='/assets/.htaccess' "$backup/" "$target/" || echo "Remote rollback failed: $backup" >&2
  fi
  exit "$status"
}
trap restore EXIT
trap 'exit 130' INT
trap 'exit 143' TERM
trap 'exit 129' HUP
started=true
rsync -ac --delay-updates --delete-after --exclude='/.well-known/' --exclude='/.htaccess' --exclude='/assets/.htaccess' "$stage/dist/" "$target/"
(cd "$target"; sha256sum --check --status "$stage/dist.sha256")
diff "$backup/.htaccess" "$target/.htaccess"
diff "$backup/assets/.htaccess" "$target/assets/.htaccess"
if test -d "$backup/.well-known"; then diff -qr "$backup/.well-known" "$target/.well-known"; fi
diff_output=$(rsync -anci --delete --exclude='/.well-known/' --exclude='/.htaccess' --exclude='/assets/.htaccess' "$stage/dist/" "$target/")
test -z "$diff_output"
echo "Origin files match validated artifact: $sha"
PUBLISH

curl -fsS --retry 2 --max-time 30 --resolve 'genesisleal.com:443:45.152.44.122' https://genesisleal.com/ -o "$work_dir/origin.html"
cmp "$dist_dir/index.html" "$work_dir/origin.html"
purge
public_verified=false
for attempt in 1 2 3; do
  if SMOKE_BASE_URL=https://genesisleal.com SMOKE_EXPECTED_SHA=$sha npm run smoke; then
    public_verified=true
    break
  fi
  echo "Public validation attempt $attempt failed; checking again after cache propagation." >&2
  sleep 5
done
test "$public_verified" = true
echo "Published and verified $sha at https://genesisleal.com; rollback backup: $backup"
if [[ -n ${GITHUB_STEP_SUMMARY:-} ]]; then
  printf 'Published `%s` at https://genesisleal.com.\n\nVerified backup: `%s`.\n' "$sha" "$backup" >> "$GITHUB_STEP_SUMMARY"
fi
