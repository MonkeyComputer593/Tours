import { Tour } from '../types';

// Spanish translations for tours
const tourTranslations: Record<string, { title: string; description: string; itinerary?: string[] }> = {
  '1': {
    title: "Exclusive Achuar Luxury Experience",
    description: "Vive una experiencia exclusiva en el corazón de la Amazonía ecuatoriana con la comunidad Achuar. Este tour de lujo incluye ceremonias de bienvenida, caminatas por senderos ancestrales, visitas a lugares sagrados y encuentros culturales auténticos que te conectarán con la esencia de la selva.",
  },
  '2': {
    title: "Achuar Luxury Immersion (Kapawi)",
    description: "Una experiencia inmersiva de lujo en el icónico Kapawi Eco Lodge, donde la comodidad se encuentra con la autenticidad de la Amazonía. Explora senderos vírgenes, participa en rituales culturales y descubre la biodiversidad extraordinaria de la selva ecuatoriana.",
  },
  '3': {
    title: "Achuar Signature Experience",
    description: "La experiencia más completa de la Amazonía ecuatoriana. Este tour signature combina dos de los destinos más emblemáticos: Sharamentsa y Kapawi, ofreciendo una inmersión total en la cultura Achuar y la naturaleza prístina de la selva.",
  },
  '4': {
    title: "Birding Tour – Pristine Rainforest",
    description: "Una experiencia única para amantes de la ornitología. Explora los mejores puntos de observación de aves de la Amazonía ecuatoriana, desde collpas naturales hasta torres de avistamiento, buscando especies emblemáticas como el Águila Harpía.",
  },
  '5': {
    title: "Cueva de los Tayos – Legendary Exploration",
    description: "Una aventura legendaria que te lleva a explorar una de las cuevas más神秘 del mundo. Desciende 50 metros por cuerdas, descubre salas monumentales y sumérgete en rituales ancestrales con la comunidad Shuar.",
  },
  '6': {
    title: "Luxury Rafting & Kayaking Río Pastaza",
    description: "Combina la adrenalina del descenso de ríos con la serenidad de la cultura amazónica. Navega las aguas turbulentas del Río Pastaza y luego relájate en una comunidad Achuar con ceremonias ancestrales.",
  },
  '7': {
    title: "Luxury Andes Experience",
    description: "Descubre la grandeur de los Andes ecuatorianos en una experiencia de lujo. Desde el patrimonio colonial de Quito hasta los paisajes impresionantes del Parque Nacional Cotopaxi, vivirás momentos inolvidables.",
  },
  '8': {
    title: "Luxury Pacific Experience",
    description: "Explora la belleza de la costa pacífica ecuatoriana en una experiencia de lujo. Desde la moderna Guayaquil hasta la Reserva Ecológica de la Isla de la Plata, descubrirás paraísos ocultos.",
  },
  '9': {
    title: "Signature Luxury Experience",
    description: "Vive la magia de las Islas Galápagos en una experiencia exclusiva. Con guías especializados y Yates privados, descubrirás la fauna endémica más extraordinaria del planeta.",
  },
  '10': {
    title: "Ecuador Grand Luxury",
    description: "El viaje de tus sueños por Ecuador. Una aventura de 15 días que combina lo mejor de los Andes, la Amazonía y las Galápagos en una experiencia luxury sin igual.",
  },
};

// English translations for tours
const tourTranslationsEn: Record<string, { title: string; description: string; itinerary?: string[] }> = {
  '1': {
    title: "Exclusive Achuar Luxury Experience",
    description: "Experience an exclusive journey in the heart of the Ecuadorian Amazon with the Achuar community. This luxury tour includes welcome ceremonies, hikes along ancestral trails, visits to sacred places, and authentic cultural encounters that will connect you with the essence of the jungle.",
  },
  '2': {
    title: "Achuar Luxury Immersion (Kapawi)",
    description: "A luxury immersive experience at the iconic Kapawi Eco Lodge, where comfort meets Amazon authenticity. Explore pristine trails, participate in cultural rituals, and discover the extraordinary biodiversity of the Ecuadorian jungle.",
  },
  '3': {
    title: "Achuar Signature Experience",
    description: "The most complete Ecuadorian Amazon experience. This signature tour combines two of the most emblematic destinations: Sharamentsa and Kapawi, offering total immersion in Achuar culture and pristine jungle nature.",
  },
  '4': {
    title: "Birding Tour – Pristine Rainforest",
    description: "A unique experience for birdwatching enthusiasts. Explore the best birdwatching spots in the Ecuadorian Amazon, from natural clay licks to observation towers, seeking iconic species like the Harpy Eagle.",
  },
  '5': {
    title: "Cueva de los Tayos – Legendary Exploration",
    description: "A legendary adventure that takes you to explore one of the most mysterious caves in the world. Descend 50 meters by rope, discover monumental chambers, and immerse in ancestral rituals with the Shuar community.",
  },
  '6': {
    title: "Luxury Rafting & Kayaking Río Pastaza",
    description: "Combine the adrenaline of river rafting with the serenity of Amazonian culture. Navigate the turbulent waters of the Pastaza River and then relax in an Achuar community with ancestral ceremonies.",
  },
  '7': {
    title: "Luxury Andes Experience",
    description: "Discover the grandeur of the Ecuadorian Andes in a luxury experience. From Quito's colonial heritage to the breathtaking landscapes of Cotopaxi National Park, you'll experience unforgettable moments.",
  },
  '8': {
    title: "Luxury Pacific Experience",
    description: "Explore the beauty of the Ecuadorian Pacific coast in a luxury experience. From modern Guayaquil to the Ecological Reserve of Isla de la Plata, you'll discover hidden paradises.",
  },
  '9': {
    title: "Signature Luxury Experience",
    description: "Experience the magic of the Galápagos Islands in an exclusive experience. With specialized guides and private yachts, you'll discover the most extraordinary endemic fauna on the planet.",
  },
  '10': {
    title: "Ecuador Grand Luxury",
    description: "The dream trip through Ecuador. A 15-day adventure that combines the best of the Andes, Amazon, and Galápagos in an unparalleled luxury experience.",
  },
};

// NOTE: Tour translations are now managed directly in Sanity Studio
// using titleEn, descriptionEn, and itineraryEn fields
// This file is kept for compatibility but uses Sanity fields instead

export function getTourById(id: string, language: string = 'es'): Tour | undefined {
  return undefined;
}

export function translateTour(tour: Tour, language: string): Tour {
  // Use Sanity fields directly - titleEn, descriptionEn, itineraryEn
  if (language === 'en') {
    return {
      ...tour,
      title: tour.titleEn || tour.title,
      description: tour.descriptionEn || tour.description,
      itinerary: tour.itineraryEn || tour.itinerary,
    };
  }
  return tour;
}
