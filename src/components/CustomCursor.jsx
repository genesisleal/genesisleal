import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const cursor = cursorRef.current
    const trail = trailRef.current
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let animationFrameId = null

    const animateTrail = () => {
      current.x += (target.x - current.x) * 0.15
      current.y += (target.y - current.y) * 0.15
      trail.style.left = `${current.x}px`
      trail.style.top = `${current.y}px`

      if (Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1) {
        animationFrameId = requestAnimationFrame(animateTrail)
      } else {
        animationFrameId = null
      }
    }

    const updatePosition = (event) => {
      target.x = event.clientX
      target.y = event.clientY
      cursor.style.left = `${target.x}px`
      cursor.style.top = `${target.y}px`
      cursor.style.opacity = '1'
      trail.style.opacity = '1'
      if (!animationFrameId) animationFrameId = requestAnimationFrame(animateTrail)
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = '1'
      trail.style.opacity = '1'
    }
    const handleMouseLeave = () => {
      cursor.style.opacity = '0'
      trail.style.opacity = '0'
    }
    const handleMouseDown = () => {
      cursor.classList.add('clicking')
      trail.classList.add('clicking')
    }
    const handleMouseUp = () => {
      cursor.classList.remove('clicking')
      trail.classList.remove('clicking')
    }

    const handleHoverStart = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover]')
      if (el && !el.closest('[data-cursor-ignore]')) {
        cursor.classList.add('hover')
        trail.classList.add('hover')
        cursor.querySelector('.cursor-text').textContent = 'Ver'
      }
    }

    const handleHoverEnd = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        cursor.classList.remove('hover')
        trail.classList.remove('hover')
        cursor.querySelector('.cursor-text').textContent = ''
      }
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div
        ref={trailRef}
        className="cursor-trail"
        style={{ opacity: 0 }}
      />
      <div
        ref={cursorRef}
        className="cursor-main"
        style={{ opacity: 0 }}
      >
        <span className="cursor-text" />
      </div>
    </>
  )
}
