import resultadoHernandez from '../assets/images/portfolio/resultado-metaads-hernandez.jpg'
import reelTemucoPoster from '../assets/images/portfolio/reel-temuco-poster.jpg'
import reelTemuco from '../assets/videos/reel-temuco-hernandez.mp4'
import resultadoInnvoice from '../assets/images/portfolio/resultado-metaads-innvoice.jpg'
import reelInnvoicePoster from '../assets/images/portfolio/reel-innvoice-poster.jpg'
import reelInnvoice from '../assets/videos/reel-innvoice.mp4'
import resultadoTemuco2 from '../assets/images/portfolio/resultado-metaads-temuco2.jpg'
import reelTemuco2Poster from '../assets/images/portfolio/reel-temuco2-poster.jpg'
import reelTemuco2 from '../assets/videos/reel-temuco2.mp4'
import carruselCanva from '../assets/images/portfolio/carrusel-victorino-canva.jpg'
import carruselDiseno from '../assets/images/portfolio/carrusel-victorino-diseno.jpg'
import carruselAlcance from '../assets/images/portfolio/carrusel-victorino-alcance.jpg'
import carruselCrecimiento from '../assets/images/portfolio/carrusel-victorino-crecimiento.jpg'
import carruselInteracciones from '../assets/images/portfolio/carrusel-victorino-interacciones.jpg'
import reelViral from '../assets/videos/reel-viral.mp4'
import reelViralPoster from '../assets/images/portfolio/reel-viral-poster.jpg'
import reelViralGuion from '../assets/images/portfolio/reel-viral-guion.jpg'
import reelViralAnalisis from '../assets/images/portfolio/reel-viral-analisis.jpg'
import reelViralVisualizaciones from '../assets/images/portfolio/reel-viral-visualizaciones.jpg'
import reelViralInteracciones from '../assets/images/portfolio/reel-viral-interacciones.jpg'

const imageSizes = new Map([
  [resultadoHernandez, [1512, 752]],
  [reelTemucoPoster, [720, 1280]],
  [resultadoInnvoice, [1502, 754]],
  [reelInnvoicePoster, [1440, 2560]],
  [resultadoTemuco2, [1526, 766]],
  [reelTemuco2Poster, [1080, 1920]],
  [carruselCanva, [444, 826]],
  [carruselDiseno, [426, 816]],
  [carruselAlcance, [382, 830]],
  [carruselCrecimiento, [386, 836]],
  [carruselInteracciones, [384, 834]],
  [reelViralPoster, [1080, 1920]],
  [reelViralGuion, [486, 832]],
  [reelViralAnalisis, [1080, 1920]],
  [reelViralVisualizaciones, [1080, 1920]],
  [reelViralInteracciones, [1080, 1920]],
])

export const caseStudies = [
  {
    slug: 'meta-ads-temuco-1412-conversaciones',
    portfolioId: 'hernandez-temuco',
    title: '1.412 conversaciones iniciadas con Meta Ads en Temuco',
    shortTitle: '1.412 conversaciones con Meta Ads',
    metaDescription: 'Caso de Meta Ads para Peluquería Hernández en Temuco: reel de posicionamiento, campaña de mensajes y 1.412 conversaciones registradas por Meta.',
    kicker: 'Caso de Meta Ads y contenido',
    client: 'Peluquería Hernández',
    location: 'Temuco, Chile',
    serviceLabel: 'Meta Ads',
    servicePath: '/servicios/meta-ads',
    period: '11 de junio al 15 de agosto de 2025',
    intro: 'Un reel de posicionamiento se convirtió en el creativo principal de una campaña orientada a generar consultas para la sede de Temuco.',
    challenge: 'La campaña necesitaba abrir conversaciones con personas interesadas en los servicios de la sede de Temuco y hacerlo con una pieza coherente con la identidad de la marca.',
    strategy: [
      'Definir las conversaciones iniciadas como acción principal de la campaña.',
      'Usar un reel de posicionamiento como creativo para presentar la propuesta de la sede.',
      'Orientar la pauta a mensajes para facilitar el paso desde el anuncio hasta la consulta.'
    ],
    work: [
      'Edición del reel utilizado en la campaña.',
      'Preparación del creativo y del mensaje publicitario.',
      'Configuración y seguimiento de la campaña en Meta Ads.',
      'Revisión del resultado durante el período documentado.'
    ],
    metrics: [
      { value: '1.412', label: 'conversaciones iniciadas' },
      { value: '$901.845,67', label: 'inversión mostrada por Meta ($)' }
    ],
    result: 'Meta registró 1.412 conversaciones iniciadas durante el período de la campaña.',
    source: 'Resultados documentados con la captura de Meta Ads incluida en este caso. Los importes se presentan con el símbolo que muestra la plataforma.',
    cover: resultadoHernandez,
    coverAlt: 'Captura de Meta Ads con 1.412 conversaciones iniciadas para Peluquería Hernández en Temuco',
    video: reelTemuco,
    poster: reelTemucoPoster,
    videoLabel: 'Reel utilizado como creativo de la campaña',
    takeaways: [
      'El contenido y la pauta trabajaron como una sola experiencia.',
      'La campaña priorizó una acción concreta y medible: iniciar una conversación.',
      'La evidencia conserva el período y los datos registrados por la plataforma.'
    ],
    questions: [
      { question: '¿Qué servicio se realizó?', answer: 'Edición del reel y gestión de una campaña de Meta Ads orientada a mensajes.' },
      { question: '¿Qué resultado se midió?', answer: 'Meta registró 1.412 conversaciones iniciadas entre el 11 de junio y el 15 de agosto de 2025.' }
    ]
  },
  {
    slug: 'meta-ads-innvoice-conversaciones',
    portfolioId: 'innvoice',
    title: 'Conversaciones a €0,42 con Meta Ads para Innvoice',
    shortTitle: 'Conversaciones a €0,42 para Innvoice',
    metaDescription: 'Caso de Meta Ads para Innvoice en Perú: concepto y edición de reel, campaña de mensajes y 37 conversaciones a €0,42 según Meta.',
    kicker: 'Caso de Meta Ads para SaaS',
    client: 'Innvoice',
    location: 'Perú',
    serviceLabel: 'Meta Ads',
    servicePath: '/servicios/meta-ads',
    period: '6 al 20 de mayo de 2026',
    intro: 'Un reel de concepto comunicó el valor de una plataforma de facturación electrónica y se utilizó en una campaña orientada a conversaciones.',
    challenge: 'Innvoice necesitaba presentar un servicio digital de forma clara y abrir conversaciones con potenciales clientes interesados en una solución de facturación electrónica.',
    strategy: [
      'Simplificar la propuesta del producto en una pieza breve y comprensible.',
      'Convertir el concepto en un reel con ritmo y una llamada a la acción clara.',
      'Usar el reel en una campaña de mensajes para reducir la distancia entre interés y consulta.'
    ],
    work: [
      'Desarrollo del concepto del reel.',
      'Edición de la pieza para comunicar el servicio.',
      'Preparación de la campaña orientada a conversaciones.',
      'Seguimiento del costo por conversación informado por Meta.'
    ],
    metrics: [
      { value: '37', label: 'conversaciones iniciadas' },
      { value: '€0,42', label: 'por conversación' },
      { value: '31%', label: 'menor que anuncios similares' }
    ],
    result: 'Meta registró 37 conversaciones a €0,42 cada una. La plataforma indicó un costo 31% inferior al de conjuntos de anuncios similares.',
    source: 'Resultados documentados con la captura de Meta Ads incluida en este caso. Los importes se presentan con el símbolo que muestra la plataforma.',
    cover: resultadoInnvoice,
    coverAlt: 'Captura de Meta Ads con 37 conversaciones a 0,42 euros para Innvoice',
    video: reelInnvoice,
    poster: reelInnvoicePoster,
    videoLabel: 'Reel utilizado en la campaña de Innvoice',
    takeaways: [
      'Una propuesta técnica puede comunicarse con un mensaje breve y concreto.',
      'El costo por conversación permitió evaluar la eficiencia de la campaña.',
      'El resultado se presenta como conversaciones registradas, sin convertirlas en ventas atribuidas.'
    ],
    questions: [
      { question: '¿Qué se promocionó?', answer: 'El servicio de facturación electrónica de Innvoice mediante un reel de concepto.' },
      { question: '¿Cómo se calculó el resultado?', answer: 'La captura de Meta muestra 37 conversaciones iniciadas a un costo de €0,42 cada una entre el 6 y el 20 de mayo de 2026.' }
    ]
  },
  {
    slug: 'meta-ads-reservas-peluqueria-temuco',
    portfolioId: 'hernandez-reservas',
    title: '268 conversaciones para consultas sobre reservas en Temuco',
    shortTitle: '268 conversaciones sobre reservas',
    metaDescription: 'Caso de Meta Ads para Peluquería Hernández: reel para consultas sobre reservas, 268 conversaciones y costo 27% menor según Meta.',
    kicker: 'Caso de campaña para reservas',
    client: 'Peluquería Hernández',
    location: 'Temuco, Chile',
    serviceLabel: 'Meta Ads',
    servicePath: '/servicios/meta-ads',
    period: '1 al 28 de febrero de 2026',
    intro: 'Un reel enfocado en reservas se utilizó como creativo de una campaña para recibir consultas por mensaje en la sede de Temuco.',
    challenge: 'La sede necesitaba impulsar consultas sobre turnos con una comunicación directa y una campaña que facilitara el contacto desde el anuncio.',
    strategy: [
      'Construir el reel alrededor de la intención de reservar un turno.',
      'Orientar la campaña a conversaciones para reducir pasos en el contacto.',
      'Observar el costo por conversación y compararlo con la referencia mostrada por Meta.'
    ],
    work: [
      'Creación y edición del reel de la campaña.',
      'Preparación del mensaje y la llamada a la acción.',
      'Configuración de la campaña orientada a mensajes.',
      'Seguimiento de conversaciones y costo por resultado.'
    ],
    metrics: [
      { value: '268', label: 'conversaciones iniciadas' },
      { value: '$1.498', label: 'por conversación' },
      { value: '27%', label: 'menor que anuncios similares' }
    ],
    result: 'Meta registró 268 conversaciones a $1.498 cada una. El costo por conversación fue 27% menor que el de anuncios similares, según Meta.',
    source: 'Resultados documentados con la captura de Meta Ads incluida en este caso. Los importes se presentan con el símbolo que muestra la plataforma.',
    cover: resultadoTemuco2,
    coverAlt: 'Captura de Meta Ads con 268 conversaciones para consultas sobre reservas en Temuco',
    video: reelTemuco2,
    poster: reelTemuco2Poster,
    videoLabel: 'Reel creado para impulsar consultas sobre reservas',
    takeaways: [
      'El objetivo del anuncio se expresó con una acción concreta para la audiencia.',
      'El reel y la campaña compartieron el mismo foco: generar consultas sobre turnos.',
      'La comparación de eficiencia proviene directamente de la plataforma Meta.'
    ],
    questions: [
      { question: '¿Qué objetivo tuvo la campaña?', answer: 'Recibir consultas por mensaje sobre reservas para la sede de Temuco.' },
      { question: '¿Qué significa el 27%?', answer: 'Meta informó que el costo por conversación fue 27% menor que el de anuncios similares.' }
    ]
  },
  {
    slug: 'carrusel-instagram-victorino-stylo',
    portfolioId: 'carrusel-victorino',
    title: 'Carrusel de Instagram con más de 178 mil visualizaciones',
    shortTitle: 'Carrusel con más de 178 mil visualizaciones',
    metaDescription: 'Caso de contenido para Victorino Stylo: estrategia, copy y diseño de un carrusel de Instagram con más de 178 mil visualizaciones y 1.793 interacciones.',
    kicker: 'Caso de estrategia de contenido',
    client: 'Victorino Stylo',
    location: 'Caguas, Puerto Rico',
    serviceLabel: 'Creación de contenido',
    servicePath: '/servicios/creacion-de-contenido',
    intro: 'Un carrusel sobre precio y valor percibido ayudó a posicionar la autoridad de un barbero premium y generó conversación con su audiencia.',
    challenge: 'El contenido debía explicar una propuesta de alto valor sin reducirla a una comparación de precios y, al mismo tiempo, sostener la atención a lo largo de diez páginas.',
    strategy: [
      'Elegir un tema capaz de generar conversación alrededor del precio y la experiencia.',
      'Organizar la idea como una secuencia de diez páginas con progresión clara.',
      'Combinar copy y diseño para reforzar el posicionamiento premium del profesional.'
    ],
    work: [
      'Desarrollo de la idea y del enfoque editorial.',
      'Escritura del copy completo del carrusel.',
      'Diseño y maquetación de las diez páginas.',
      'Revisión de alcance, crecimiento e interacciones.'
    ],
    metrics: [
      { value: '+178K', label: 'visualizaciones' },
      { value: '1.793', label: 'interacciones' },
      { value: '10', label: 'páginas diseñadas' }
    ],
    result: 'El carrusel superó las 178 mil visualizaciones y registró 1.793 interacciones en Instagram.',
    source: 'Resultados documentados con las capturas de estadísticas incluidas en este caso.',
    cover: carruselDiseno,
    coverAlt: 'Diseño del carrusel de Instagram creado para Victorino Stylo',
    gallery: [
      { src: carruselCanva, alt: 'Proceso de diseño del carrusel de Victorino Stylo en Canva', caption: 'Concepto y diseño en Canva' },
      { src: carruselDiseno, alt: 'Vista del carrusel de diez páginas para Victorino Stylo', caption: 'Carrusel completo de diez páginas' },
      { src: carruselAlcance, alt: 'Captura del alcance obtenido por el carrusel de Victorino Stylo', caption: 'Resultado de alcance' },
      { src: carruselCrecimiento, alt: 'Captura del crecimiento del alcance del carrusel', caption: 'Evolución del alcance' },
      { src: carruselInteracciones, alt: 'Captura de las interacciones del carrusel de Victorino Stylo', caption: 'Interacciones y público alcanzado' }
    ],
    takeaways: [
      'El enfoque editorial conectó un tema de negocio con una conversación relevante para la audiencia.',
      'La secuencia visual permitió desarrollar la idea sin depender de una sola placa.',
      'El caso reúne proceso creativo y capturas de rendimiento en una misma página.'
    ],
    questions: [
      { question: '¿Qué incluyó el trabajo?', answer: 'Idea, concepto, copy, diseño y maquetación de un carrusel de diez páginas.' },
      { question: '¿Qué resultados obtuvo?', answer: 'Más de 178 mil visualizaciones y 1.793 interacciones, según las capturas de estadísticas.' }
    ]
  },
  {
    slug: 'reel-viral-barberia-crecimiento-organico',
    portfolioId: 'reel-viral-christian',
    title: 'Reel de barbería con 89 mil visualizaciones y 1.802 seguidores nuevos',
    shortTitle: 'Reel con 89 mil visualizaciones',
    metaDescription: 'Caso de contenido para barbería: guion, dirección y análisis de un reel con 89.465 visualizaciones y 1.802 seguidores nuevos.',
    kicker: 'Caso de crecimiento orgánico',
    client: 'Christian',
    location: 'Barbería',
    serviceLabel: 'Creación de contenido',
    servicePath: '/servicios/creacion-de-contenido',
    intro: 'La pieza se trabajó de punta a punta, desde el guion y la dirección de la grabación hasta la edición y el análisis posterior del rendimiento.',
    challenge: 'El reel debía captar atención rápidamente, llegar a personas que todavía no seguían la cuenta y convertir ese alcance en crecimiento de audiencia.',
    strategy: [
      'Diseñar un guion pensado para el formato vertical y el consumo rápido.',
      'Dirigir la grabación para obtener el material necesario para una edición dinámica.',
      'Analizar el rendimiento y documentar visualizaciones, alcance e incorporación de seguidores.'
    ],
    work: [
      'Idea y guion del reel.',
      'Dirección de la grabación.',
      'Edición y optimización de la pieza.',
      'Análisis del rendimiento publicado.'
    ],
    metrics: [
      { value: '89.465', label: 'visualizaciones' },
      { value: '+1.802', label: 'seguidores nuevos' },
      { value: '94,1%', label: 'visualizaciones de no seguidores' }
    ],
    result: 'El reel alcanzó 89.465 visualizaciones y sumó 1.802 seguidores nuevos. El 94,1% de las visualizaciones correspondió a cuentas que todavía no seguían el perfil.',
    source: 'Resultados documentados con las capturas de estadísticas incluidas en este caso.',
    cover: reelViralPoster,
    coverAlt: 'Portada del reel de barbería que alcanzó 89 mil visualizaciones',
    video: reelViral,
    poster: reelViralPoster,
    videoLabel: 'Reel final publicado',
    gallery: [
      { src: reelViralGuion, alt: 'Guion y planificación del reel de barbería', caption: 'Guion y planificación' },
      { src: reelViralAnalisis, alt: 'Análisis inicial del rendimiento del reel', caption: 'Análisis inicial del rendimiento' },
      { src: reelViralVisualizaciones, alt: 'Captura con las visualizaciones totales del reel', caption: 'Visualizaciones registradas' },
      { src: reelViralInteracciones, alt: 'Captura con interacciones y seguidores obtenidos por el reel', caption: 'Interacciones y seguidores nuevos' }
    ],
    takeaways: [
      'La planificación incluyó tanto la producción como el análisis posterior.',
      'La mayor parte de las visualizaciones llegó a personas que aún no seguían la cuenta.',
      'El caso muestra el guion, la pieza final y las capturas de rendimiento.'
    ],
    questions: [
      { question: '¿Qué partes del reel se trabajaron?', answer: 'La idea, el guion, la dirección de grabación, la edición y el análisis de rendimiento.' },
      { question: '¿Qué crecimiento produjo?', answer: 'Las estadísticas registraron 89.465 visualizaciones y 1.802 seguidores nuevos.' }
    ]
  }
].map(item => ({
  ...item,
  coverWidth: imageSizes.get(item.cover)[0],
  coverHeight: imageSizes.get(item.cover)[1],
  gallery: item.gallery?.map(media => ({ ...media, width: imageSizes.get(media.src)[0], height: imageSizes.get(media.src)[1] })),
}))

export function getCaseStudy(slug) {
  return caseStudies.find((item) => item.slug === slug)
}
