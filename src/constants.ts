import { Tour, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Tours', href: '#tours' },
  { label: 'Nosotros', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const TOURS: Tour[] = [
  {
    id: '1',
    title: "Exclusive Achuar Luxury Experience",
    seoTitle: "Amazonía Exclusive Achuar Luxury Experience - Tour de Lujo",
    metaDescription: "Experiencia luxury en la Amazonía ecuatoriana con la comunidad Achuar. 4 días de inmersión cultural, ceremonias ancestrales y naturaleza prístina.",
    description: "Vive una experiencia exclusiva en el corazón de la Amazonía ecuatoriana con la comunidad Achuar. Este tour de lujo incluye ceremonias de bienvenida, caminatas por senderos ancestrales, visitas a lugares sagrados y encuentros culturales auténticos que te conectarán con la esencia de la selva.",
    region: 'Amazonía',
    duration: '4 Días / 3 Noches',
    priceInternacional: '$1,850',
    priceNacional: '$1,480',
    image: '/assets/exclusive-amazon.jpeg',
    includes: ['Alojamiento en eco-lodge de lujo', 'Guía naturalista profesional', 'Todas las comidas gourmet', 'Transporte fluvial', 'Todas las excursions', 'Ceremonias ancestrales'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Día 1: Ceremonia de bienvenida Achuar, almuerzo típico, caminata por el Sendero Mente, visita al Árbol Sagrado Ceibo y fogata ancestral con mitos y leyendas.',
      'Día 2: Observación de aves y plantas medicinales, visita a la Cascada Sagrada, taller de artesanías con mujeres Achuar y caminata nocturna de fauna.',
      'Día 3: Visita al saladero de loros, caminata por el Sendero Wayusentsa, visita a la Laguna Sagrada, descenso en balsa tradicional y ceremonia cultural de despedida.',
      'Día 4: Observación de aves al amanecer en bote y exposición de artesanías.'
    ],
    activities: ['Caminatas en selva', 'Experiencia cultural', 'Navegación fluvial', 'Observación de fauna', 'Ceremonias ancestrales', 'Artesanías']
  },
  {
    id: '2',
    title: "Achuar Luxury Immersion (Kapawi)",
    seoTitle: "Amazonía Achuar Luxury Immersion Kapawi - Tour 5 Días",
    metaDescription: "Experiencia luxury en Kapawi Eco Lodge. 5 días de inmersión en la selva amazónica con tradiciones Achuar y naturaleza prístina.",
    description: "Una experiencia inmersiva de lujo en el icónico Kapawi Eco Lodge, donde la comodidad se encuentra con la autenticidad de la Amazonía. Explora senderos vírgenes, participa en rituales culturales y descubre la biodiversidad extraordinaria de la selva ecuatoriana.",
    region: 'Amazonía',
    duration: '5 Días / 4 Noches',
    priceInternacional: '$2,450',
    priceNacional: '$1,960',
    image: '/assets/extended-achuar.jpeg',
    includes: ['Alojamiento en Kapawi Eco Lodge', 'Guía especializado', 'Todas las comidas', 'Traslado aéreo', 'Excursiones guiadas', 'Actividades culturales'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Día 1: Traslado aéreo a Kapawi, bienvenida tradicional y caminata de orientación ecológica.',
      'Día 2: Caminata profunda en la selva, interpretación de plantas medicinales, canotaje silencioso en laguna y exploración nocturna.',
      'Día 3: Ritual matutino opcional, visita a comunidad local para intercambio cultural, taller de cerámica y navegación en canoa.',
      'Día 4: Excursión para observación de aves, senderismo en bosque primario y tarde de bienestar (spa natural o yoga).',
      'Día 5: Caminata corta o canotaje al amanecer y retorno aéreo.'
    ],
    activities: ['Caminatas en selva', 'Canotaje', 'Observación de aves', 'Cultura Achuar', 'Wellness y spa', 'Exploración nocturna']
  },
  {
    id: '3',
    title: "Achuar Signature Experience",
    seoTitle: "Amazonía Achuar Signature Experience - Tour 8 Días",
    metaDescription: "La experiencia signature definitiva en la Amazonía. 8 días explorando Sharamentsa, Kapawi y comunidades indígenas ancestrales.",
    description: "La experiencia más completa de la Amazonía ecuatoriana. Este tour signature combina dos de los destinos más emblemáticos: Sharamentsa y Kapawi, ofreciendo una inmersión total en la cultura Achuar y la naturaleza prístina de la selva.",
    region: 'Amazonía',
    duration: '8 Días / 7 Noches',
    priceInternacional: '$3,850',
    priceNacional: '$3,080',
    image: '/assets/cultural-achuar.jpeg',
    includes: ['Alojamiento en eco-lodges', 'Guía naturalista privado', 'Todas las comidas', 'Traslados aéreos', 'Excursiones exclusivas', 'Ceremonias culturales'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Día 1-2: Ceremonia en Sharamentsa, visita al Árbol Ceibo, observación de aves, cascada sagrada y taller de artesanías.',
      'Día 3-5: Navegación a saladero de loros, traslado a Kapawi Eco-Lodge, excursión en bosque primario, canotaje en laguna y rituales culturales.',
      'Día 6-8: Caminata al sendero Pitsacocha, visita a comunidad Suwa y Wachirpas, ceremonia de despedida y avistamiento de guacamayos.'
    ],
    activities: ['Caminatas en selva', 'Navegación fluvial', 'Observación de aves', 'Cultura Achuar', 'Ceremonias ancestrales', 'Exploración de comunidades']
  },
  {
    id: '4',
    title: "Birding Tour – Pristine Rainforest",
    seoTitle: "Amazonía Birding Tour Pristine Rainforest - 8 Días",
    metaDescription: "Tour de observación de aves en la Amazonía prístina. 8 días buscando águilas harpías, cotingas y la biodiversidad única de Kapawi.",
    description: "Una experiencia única para amantes de la ornitología. Explora los mejores puntos de observación de aves de la Amazonía ecuatoriana, desde collpas naturales hasta torres de avistamiento, buscando especies emblemáticas como el Águila Harpía.",
    region: 'Amazonía',
    duration: '8 Días / 7 Noches',
    priceInternacional: '$3,650',
    priceNacional: '$2,920',
    image: '/assets/birding-achuar.jpeg',
    includes: ['Alojamiento en eco-lodges', 'Guía ornitólogo especializado', 'Todas las comidas', 'Equipo de observación', 'Traslados fluviales', 'Entrada a reservas'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Día 1-3: Birding en lagunas y bosque secundario, observación de Hoatzin, fotografía en collpas naturales y traslado fluvial a Kapawi.',
      'Día 4-5: Observación de cotingas y rapaces desde torres, canoa silenciosa y búsqueda estratégica del Águila Harpía.',
      'Día 6-8: Expedición a Wachirpas, birding en zonas vírgenes e interacción cultural final.'
    ],
    activities: ['Observación de aves', 'Fotografía de fauna', 'Canoa silenciosa', 'Exploración de collpas', 'Avistamiento de rapaces']
  },
  {
    id: '5',
    title: "Cueva de los Tayos – Legendary Exploration",
    seoTitle: "Amazonía Cueva de los Tayos Legendary - Tour 4 Días",
    metaDescription: "Explora la legendaria Cueva de los Tayos. 4 días de aventura extrema, rituales Shuar y maravillas geológicas subterráneas.",
    description: "Una aventura legendaria que te lleva a explorar una de las cuevas más神秘 del mundo. Desciende 50 metros por cuerdas, descubre salas monumentales y sumérgete en rituales ancestrales con la comunidad Shuar.",
    region: 'Amazonía',
    duration: '4 Días / 3 Noches',
    priceInternacional: '$1,650',
    priceNacional: '$1,320',
    image: '/assets/cueva-tayos.jpeg',
    includes: ['Alojamiento en comunidad Shuar', 'Guía especializado', 'Todas las comidas', 'Equipo de espeleología', 'Rituales ancestrales', 'Traslados'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Día 1: Navegación por ríos Namangoza y Santiago, ritual Shuar, charla técnica y descenso con cuerdas (50m) a la cueva.',
      'Día 2-3: Exploración de salas (Arco de Moricz, Anfiteatro, etc.), visita a la estalagmita de Neil Armstrong, cascadas internas y rituales de tabaco y ayahuasca.',
      'Día 4: Ascenso por polipastos, acto cultural en la comunidad de Kuankus y retorno a Macas.'
    ],
    activities: ['Espeleología', 'Rituales Shuar', 'Navegación fluvial', 'Exploración subterránea', 'Cascadas']
  },
  {
    id: '6',
    title: "Luxury Rafting & Kayaking Río Pastaza",
    seoTitle: "Amazonía Luxury Rafting Kayaking Río Pastaza - 4 Días",
    metaDescription: "Aventura de rafting y kayak en el Río Pastaza. 4 días de emociones clase III-IV y experiencia cultural Achuar.",
    description: "Combina la adrenalina del descenso de ríos con la serenidad de la cultura amazónica. Navega las aguas turbulentas del Río Pastaza y luego relájate en una comunidad Achuar con ceremonias ancestrales.",
    region: 'Amazonía',
    duration: '4 Días / 3 Noches',
    priceInternacional: '$1,950',
    priceNacional: '$1,560',
    image: '/assets/luxury-rafting.jpeg',
    includes: ['Alojamiento en eco-lodge', 'Equipo de rafting/kayak', 'Guía certificado', 'Todas las comidas', 'Vuelo en avioneta', 'Experiencias culturales'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Día 1: Descenso técnico en rafting y kayak (clase III-IV) por el Río Pastaza y recepción en comunidad Achuar.',
      'Día 2-3: Ceremonias Achuar, caminata interpretativa de plantas medicinales, visita a cascada o laguna sagrada y fogata ancestral.',
      'Día 4: Paseo corto al amanecer y vuelo escénico en avioneta de retorno.'
    ],
    activities: ['Rafting', 'Kayak', 'Ceremonias ancestrales', 'Caminatas', 'Vuelo en avioneta']
  },
  {
    id: '7',
    title: "Luxury Andes Experience",
    seoTitle: "Andes Luxury Experience Ecuador - Tour 4 Días",
    metaDescription: "Experiencia luxury en los Andes ecuatorianos. Quito colonial, Cotopaxi, cabalgata y spa andino en 4 días únicos.",
    description: "Descubre la grandeur de los Andes ecuatorianos en una experiencia de lujo. Desde el patrimonio colonial de Quito hasta los paisajes impresionantes del Parque Nacional Cotopaxi, vivirás momentos inolvidables.",
    region: 'Andes',
    duration: '4 Días / 3 Noches',
    priceInternacional: '$1,850',
    priceNacional: '$1,480',
    image: '/assets/luxury-andes.jpeg',
    includes: ['Hotel boutique 5 estrellas', 'Guía privado', 'Transporte de lujo', 'Todas las comidas', 'Cabalgata', 'Sesión de spa'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Día 1: Tour privado por el Centro Histórico de Quito (UNESCO).',
      'Día 2: Visita al Parque Nacional Cotopaxi (Laguna Limpiopungo y miradores) y caminata en el páramo.',
      'Día 3: Cabalgata por paisajes andinos, spa con baños de hierbas y visita cultural a comunidades de Saquisilí.',
      'Día 4: Mercado artesanal de Otavalo y visita a la Laguna de Cuicocha.'
    ],
    activities: ['City tour', 'Senderismo', 'Cabalgata', 'Spa andino', 'Visitas culturales', 'Mercados artesanales']
  },
  {
    id: '8',
    title: "Luxury Pacific Experience",
    seoTitle: "Costa Luxury Pacific Ecuador - Tour 4 Días",
    metaDescription: "Experiencia luxury en la costa ecuatoriana. Guayaquil, Ruta del Spondylus, spa holístico e Isla de la Plata.",
    description: "Explora la belleza de la costa pacífica ecuatoriana en una experiencia de lujo. Desde la moderna Guayaquil hasta la Reserva Ecológica de la Isla de la Plata, descubrirás paraísos ocultos.",
    region: 'Costa',
    duration: '4 Días / 3 Noches',
    priceInternacional: '$1,750',
    priceNacional: '$1,400',
    image: '/assets/home.jpeg',
    includes: ['Hotel boutique frente al mar', 'Guía privado', 'Transporte de lujo', 'Todas las comidas', 'Excursión a Isla de la Plata', 'Sesión de spa'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Día 1: City tour en Guayaquil (Malecón 2000, Barrio Las Peñas).',
      'Día 2: Recorrido por la Ruta del Spondylus y tarde de spa holístico frente al mar.',
      'Día 3: Excursión privada a la Isla de la Plata y avistamiento de fauna marina (aves, tortugas y ballenas en temporada).',
      'Día 4: Mañana de descanso en playa y retorno a Guayaquil.'
    ],
    activities: ['City tour', 'Spa holístico', 'Avistamiento de fauna', 'Snorkel', 'Playa', 'Cultura local']
  },
  {
    id: '9',
    title: "Signature Luxury Experience",
    seoTitle: "Galápagos Signature Luxury - Tour 5 Días",
    metaDescription: "Vive la magia de las Islas Galápagos en una experiencia exclusiva. Con guías especializados y Yates privados, descubrirás la fauna endémica más extraordinaria del planeta.",
    description: "Vive la magia de las Islas Galápagos en una experiencia exclusiva. Con guías especializados y Yates privados, descubrirás la fauna endémica más extraordinaria del planeta. Desde tortugas gigantes hasta leones marinos, cada momento será unforgettable.",
    region: 'Galápagos',
    duration: '5 Días / 4 Noches',
    priceInternacional: '$4,850',
    priceNacional: '$3,880',
    image: '/assets/galapagos-signature.jpeg',
    includes: ['Yate privado de lujo', 'Alojamiento en hotel boutique', 'Guía naturalista privado', 'Todas las comidas', 'Snorkel equipo completo', 'Excursiones exclusivas'],
    excludes: ['Vuelos a Galápagos', 'Entrada al Parque Nacional', 'Tarjeta de control', 'Gastos personales', 'Seguro de viaje'],
    itinerary: [
      'Día 1-2: Visita a la Estación Científica Charles Darwin y caminata natural en Tortuga Bay para observación de iguanas.',
      'Día 3: Excursión a Playa El Garrapatero (manglares y aves) y recorrido por Academy Bay.',
      'Día 4: Navegación en yate privado para snorkeling con tortugas, leones marinos y rayas; opción de kayak o paddle board.',
      'Día 5: Traslado al aeropuerto y asistencia de salida.'
    ],
    activities: ['Snorkel', 'Kayak', 'Paddle board', 'Observación de fauna', 'Navegación privada', 'Caminatas naturales']
  },
  {
    id: '10',
    title: "Ecuador Grand Luxury",
    seoTitle: "Ecuador Grand Luxury - 15 Días Andes Amazonía Galápagos",
    metaDescription: "La experiencia más completa de Ecuador. 15 días explorando Andes, Amazonía y Galápagos en un viaje luxury definitivo.",
    description: "El viaje de tus sueños por Ecuador. Una aventura de 15 días que combina lo mejor de los Andes, la Amazonía y las Galápagos en una experiencia luxury sin igual. Desde Quito colonial hasta los rincones más vírgenes de la selva y las islas encantadas.",
    region: 'Andes',
    duration: '15 Días / 14 Noches',
    priceInternacional: '$9,850',
    priceNacional: '$7,880',
    image: '/assets/ecuador-grand-luxury.jpeg',
    includes: ['Hoteles 5 estrellas', 'Eco-lodges de lujo', 'Yate privado en Galápagos', 'Guía privado', 'Todas las comidas', 'Traslados privados', 'Vuelos internos', 'Experiencias exclusivas'],
    excludes: ['Vuelos internacionales', 'Entrada Parque Nacional Galápagos', 'Tarjeta de control', 'Gastos personales', 'Seguro de viaje', 'Propinas'],
    itinerary: [
      'Andes (Día 1-6): Centro Histórico de Quito, museos privados, Parque Nacional Cotopaxi, cabalgata, spa andino y mercado de Otavalo.',
      'Amazonía (Día 7-10): Exploración en el Yasuní, torres de observación de biodiversidad, encuentro cultural indígena y navegación en canoa.',
      'Galápagos (Día 11-15): Estación Charles Darwin, Tortuga Bay, navegación privada en yate para snorkeling, Playa El Garrapatero y Academy Bay.'
    ],
    activities: ['Andes', 'Amazonía', 'Galápagos', 'Cultura', 'Aventura', 'Luxury', 'Fauna', 'Naturaleza']
  },
];
