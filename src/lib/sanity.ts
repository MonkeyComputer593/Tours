import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "pc54az1o";
const dataset = "production";
const apiVersion = "2024-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for fresh data
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

export async function getAllTours() {
  return sanityClient.fetch(
    `*[_type == "tour"] | order(order asc){
      _id,
      title,
      titleEn,
      slug,
      description,
      descriptionEn,
      region,
      duration,
      priceNacional,
      priceInternacional,
      image,
      itinerary,
      itineraryEn,
      order
    }`,
  );
}

// Helper function to generate slug from title (matches Sanity's default behavior)
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúñü\s-]/g, '') // Keep letters, numbers, spaces, hyphens
    .replace(/\s+/g, '-')                 // Replace spaces with hyphens
    .replace(/-+/g, '-')                  // Replace multiple hyphens with single
    .replace(/^-|-$/g, '');                // Remove leading/trailing hyphens
}

export async function getTourBySlug(slug: string) {
  // Get all tours
  const allTours = await sanityClient.fetch(
    `*[_type == "tour"]{
      _id,
      title,
      titleEn,
      slug,
      description,
      descriptionEn,
      region,
      duration,
      priceNacional,
      priceInternacional,
      image,
      itinerary,
      itineraryEn,
      includes,
      excludes,
      order
    }`
  );

  const slugNormalized = slug.toLowerCase().trim();

  // Find tour - ONLY exact matching to avoid wrong tour selection
  for (const tour of allTours) {
    // Strategy 1: Exact slug.current match (if tour has slug configured in Sanity)
    if (tour.slug?.current?.toLowerCase() === slugNormalized) {
      return tour;
    }

    // Strategy 2: Match by generated slug from title
    const titleSlug = generateSlug(tour.title || '');
    if (titleSlug === slugNormalized) {
      return tour;
    }
  }

  // If no match found, return null
  return null;
}

export async function getAllFaqs() {
  return sanityClient.fetch(`*[_type == "faq"] | order(order asc)`);
}
