import innvoice from '../assets/images/portfolio/landing-innvoice.jpg'
import bernal from '../assets/images/portfolio/landing-bernal.jpg'
import global from '../assets/images/portfolio/landing-bbglobal.jpg'
import carconnect from '../assets/images/portfolio/landing-carconnect.jpg'
import linkedin from '../assets/images/portfolio/carrusel-bigbang-linkedin.jpg'
import milena from '../assets/images/portfolio/reel-milena-poster.jpg'
import genesis from '../assets/images/portfolio/landing-genesisleal.jpg'

export const sectors = [
  {
    slug: 'software-tecnologia', label: 'Software y tecnología', heading: 'Contenido, publicidad y landing pages para software',
    description: 'Comunicar un producto digital exige explicar qué problema resuelve y qué puede hacer la persona después. Trabajo el mensaje, las piezas y la página de destino para que ese recorrido sea claro.',
    metaDescription: 'Contenido, Meta Ads y landing pages para software y tecnología. Conocé el trabajo de Genesis Leal para Innvoice, un SaaS de facturación electrónica.',
    work: [
      ['Explicar el producto', 'Guiones y reels que presentan su utilidad con un mensaje concreto y una llamada a la acción.'],
      ['Preparar la landing', 'Una jerarquía que conecta la propuesta de valor con pruebas gratuitas, demos o consultas, según el producto.'],
      ['Trabajar la publicidad', 'Creatividades y campañas de Meta Ads con una acción definida y seguimiento de los resultados registrados.'],
    ],
    projects: [
      { title: 'Landing de Innvoice', client: 'Facturación electrónica · Perú', image: innvoice, text: 'Diseño de la landing del producto, con una propuesta de valor clara y llamadas a la acción para pruebas gratuitas y demos.', link: '/portafolio#web-innvoice' },
      { title: 'Campaña de Meta Ads para Innvoice', client: 'Publicidad para SaaS', text: 'Una captura de Meta registra 37 conversaciones a €0,42 cada una, del 6 al 20 de mayo de 2026. El caso muestra la pieza y la evidencia disponible.', link: '/casos/meta-ads-innvoice-conversaciones' },
      { title: 'Reel de marca para Innvoice', client: 'Contenido de producto', text: 'Guion y edición para comunicar el valor del producto: claridad del mensaje, ritmo y cierre con llamada a la acción.', link: '/portafolio#edicion-innvoice' },
    ],
    questions: [
      ['¿Podemos trabajar solo la landing?', 'Sí. Definimos el objetivo, las secciones, el contenido y las funciones necesarias. Diseño web, contenido y publicidad pueden cotizarse por separado.'],
      ['¿La landing incluye desarrollar el software?', 'El trabajo mostrado es la página de presentación del producto. El desarrollo del software y sus integraciones necesitan un alcance específico.'],
      ['¿Cómo se define el presupuesto?', 'Según la página, las piezas, los canales y las funciones que necesita el proyecto. La inversión en anuncios y las herramientas se definen aparte.'],
    ], services: ['web', 'content', 'ads'],
  },
  {
    slug: 'clinicas-dentales', label: 'Clínicas dentales', heading: 'Diseño web para clínicas dentales',
    description: 'Una persona que busca una clínica necesita entender qué tratamientos ofrece, quién la atiende y cómo pedir una cita. Organizo esa información en una web con una presentación cercana y profesional.',
    metaDescription: 'Diseño web para clínicas dentales con servicios claros y acceso a consultas. Conocé el proyecto de Genesis Leal para Bernal Dental Clinic en Barcelona.',
    work: [
      ['Presentar la clínica', 'Información sobre la clínica, el equipo y los servicios con una jerarquía fácil de recorrer.'],
      ['Organizar los tratamientos', 'Textos e imágenes aportados y aprobados por la clínica para explicar su oferta.'],
      ['Facilitar el contacto', 'Un recorrido hacia la solicitud de cita o consulta, con el canal que utiliza el equipo.'],
    ], projects: [{ title: 'Web de Bernal Dental Clinic', client: 'Clínica dental · Barcelona', image: bernal, text: 'Diseño de la web con tono cercano y profesional, prueba social y un recorrido pensado para llevar a la solicitud de citas.', link: '/portafolio#web-bernal' }],
    questions: [
      ['¿Quién prepara la información de los tratamientos?', 'La clínica aporta y valida la información médica, las fotografías y los datos del equipo. Mi trabajo es organizar y presentar ese contenido en la web.'],
      ['¿Incluye un sistema de reservas?', 'Definimos si se necesita un enlace a un sistema existente, un formulario o una integración. Su configuración y costos se incluyen solo si están acordados en la propuesta.'],
      ['¿También incluye gestión de redes?', 'El caso publicado corresponde a diseño web. Si necesitás contenido o redes, lo revisamos como un servicio separado.'],
    ], services: ['web'],
  },
  {
    slug: 'empresas-b2b', label: 'Empresas y servicios B2B', heading: 'Diseño web corporativo para empresas B2B',
    description: 'Trabajo páginas que explican qué hace una empresa, a quién ayuda y cómo iniciar una conversación comercial. El contenido y la estructura deben ayudar a entender una oferta que puede tener varios servicios y sectores.',
    metaDescription: 'Diseño web corporativo para empresas B2B. Conocé el trabajo de Genesis Leal para B&B Global, empresa de comercio exterior y supply chain.',
    work: [
      ['Ordenar la oferta', 'Una estructura clara para los servicios, los sectores y la propuesta de valor de la empresa.'],
      ['Presentar la trayectoria', 'Identidad visual, experiencia y material real de la empresa para dar contexto a su trabajo.'],
      ['Facilitar la cotización', 'Llamadas a la acción y un recorrido hacia el contacto comercial según el proceso de atención.'],
    ], projects: [{ title: 'Web corporativa de B&B Global', client: 'Comercio exterior y supply chain', image: global, text: 'Diseño de una web corporativa con identidad sobria, jerarquía de servicios y sectores y la cotización como acción principal.', link: '/portafolio#web-bbglobal' }],
    questions: [
      ['¿Qué material necesitamos?', 'Servicios, sectores atendidos, información de la empresa, identidad visual y fotografías disponibles. Acordamos qué textos necesitan preparación o revisión.'],
      ['¿Se pueden presentar varios servicios?', 'Sí. Organizamos la navegación y las páginas según la oferta y la información disponible, evitando mezclar servicios que requieren explicaciones distintas.'],
      ['¿La web incluye mantenimiento?', 'Definimos por separado qué actualizaciones, soporte, dominio y alojamiento necesita la empresa. El presupuesto detalla el alcance acordado.'],
    ], services: ['web', 'content'],
  },
  {
    slug: 'agencias-marketing', label: 'Agencias de marketing', heading: 'Landing pages y creatividad publicitaria para agencias',
    description: 'Puedo acompañar a una agencia en la presentación de su oferta y en la producción de piezas publicitarias. Mi portafolio incluye una landing para una agencia de performance y mi experiencia actual como creativo publicitario en KLIV.',
    metaDescription: 'Landing pages y creatividad publicitaria para agencias de marketing. Proyecto Car Connect y experiencia de Genesis Leal en investigación, guiones y producción.',
    work: [
      ['Presentar la oferta', 'Landing pages con propuesta de valor, servicios y una acción principal como agendar una llamada.'],
      ['Desarrollar ideas de anuncios', 'Investigación, conceptos y guiones alineados con la oferta, el público y el objetivo de la campaña.'],
      ['Coordinar las piezas', 'Diseño o edición, referencias y revisión creativa según el alcance y el flujo de trabajo del equipo.'],
    ], projects: [
      { title: 'Landing de Car Connect', client: 'Agencia de performance para concesionarias', image: carconnect, text: 'Diseño de una landing con propuesta de valor directa, identidad con acento naranja y un recorrido enfocado en agendar una llamada.', link: '/portafolio#web-carconnect' },
      { title: 'Experiencia en Agencia KLIV', client: 'Creativo publicitario · Desde julio de 2026', text: 'Investigación de mercado, ideación de anuncios, coordinación de producción y análisis para optimizar creatividades. El apartado de experiencia describe mi rol.', link: '/experiencia' },
    ], questions: [
      ['¿Podés trabajar con el equipo de la agencia?', 'Definimos el rol, los entregables, las referencias y quién revisa cada pieza. La coordinación se adapta al proceso del equipo.'],
      ['¿Diseño y publicidad se cotizan juntos?', 'Pueden formar parte de una propuesta o contratarse por separado. El alcance depende del proyecto y de lo que ya resuelve la agencia.'],
      ['¿Podés publicar trabajos de clientes de la agencia?', 'Solo se presentan materiales que puedan compartirse y con autorización cuando corresponda. Acordamos esa condición antes de incluirlos en el portafolio.'],
    ], services: ['web', 'content', 'ads'],
  },
  {
    slug: 'marca-personal-linkedin', label: 'Marca personal y LinkedIn', heading: 'Contenido para marca personal y LinkedIn',
    description: 'Transformo ideas y experiencia profesional en contenido que se entiende: carruseles, reels informativos y páginas personales. El trabajo parte de tu voz, los temas que conocés y lo que querés comunicar.',
    metaDescription: 'Carruseles, reels y webs para marca personal y LinkedIn. Conocé el contenido propio y el reel informativo de Milena en el portafolio de Genesis Leal.',
    work: [
      ['Dar forma a tus ideas', 'Conceptos, guiones y textos que organizan un tema sin perder tu voz.'],
      ['Crear las piezas', 'Carruseles, diseño y edición de reels con ritmo y subtítulos para el feed profesional.'],
      ['Presentar tu trabajo', 'Una web personal o portafolio que reúne tu trayectoria, tus servicios y una forma clara de contactarte.'],
    ], projects: [
      { title: 'Carrusel educativo en LinkedIn', client: 'Contenido propio', image: linkedin, text: 'Idea, copy y diseño de ocho diapositivas sobre desarrollo profesional. El portafolio documenta más de 87 mil impresiones y 165 veces compartido.', link: '/portafolio#carrusel-bigbang' },
      { title: 'Reel informativo de Milena', client: 'Contenido para LinkedIn', image: milena, text: 'Guion y edición de un contenido educativo con estructura, ritmo y subtítulos para el feed profesional.', link: '/portafolio#edicion-milena' },
      { title: 'Mi web y portafolio', client: 'Genesis Leal', image: genesis, text: 'Diseño y desarrollo de este sitio: identidad visual, estructura, textos y código.', link: '/portafolio#web-genesisleal' },
    ], questions: [
      ['¿Tengo que grabar los videos?', 'Acordamos el material necesario y las referencias. Edito las tomas que aportás y trabajamos el guion antes de producir cuando el proyecto lo requiere.'],
      ['¿Podemos empezar con carruseles?', 'Sí. Definimos los temas, la cantidad de piezas y la revisión de textos y diseño en la propuesta.'],
      ['¿Incluye gestionar mi LinkedIn?', 'La creación de piezas y la gestión del perfil tienen alcances distintos. Acordamos expresamente si necesitás planificación, publicación y seguimiento.'],
    ], services: ['content', 'web', 'social'],
  },
]
export const sectorCards = [
  { label: 'Peluquerías y barberías', path: '/servicios/redes-sociales-peluquerias-barberias', description: 'Contenido, redes y Meta Ads con casos de Hernández, Christian y Victorino Stylo.' },
  ...sectors.map(sector => ({ label: sector.label, path: `/sectores/${sector.slug}`, description: sector.metaDescription })),
]
