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

export async function getAllFaqs() {
  return sanityClient.fetch(`*[_type == "faq"] | order(order asc)`);
}
