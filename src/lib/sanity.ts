import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'pc54az1o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Disable cache to get fresh data
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => builder.image(source)

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
    }`
  )
}

export async function getAllFaqs() {
  return sanityClient.fetch(
    `*[_type == "faq"] | order(order asc)`
  )
}
