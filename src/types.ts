export interface Tour {
  id: string;
  title: string;
  titleEn?: string;
  slug?: { current: string };
  seoTitle?: string;
  metaDescription?: string;
  description: string;
  descriptionEn?: string;
  region: 'Amazonía' | 'Andes' | 'Costa' | 'Galápagos';
  duration: string;
  priceNacional: string;
  priceInternacional: string;
  image: string;
  includes?: string[];
  excludes?: string[];
  itinerary?: string[];
  itineraryEn?: string[];
  activities?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
