export default {
  name: 'tour',
  title: 'Tour',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título (Español)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción (Español)',
      type: 'text',
      rows: 4,
    },
    {
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      rows: 4,
    },
    {
      name: 'region',
      title: 'Región',
      type: 'string',
      options: {
        list: [
          { title: 'Amazonía', value: 'Amazonía' },
          { title: 'Andes', value: 'Andes' },
          { title: 'Costa', value: 'Costa' },
          { title: 'Galápagos', value: 'Galápagos' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duración',
      type: 'string',
      description: 'Ejemplo: 5 días / 4 noches',
    },
    {
      name: 'priceNacional',
      title: 'Precio Nacional (USD)',
      type: 'string',
    },
    {
      name: 'priceInternacional',
      title: 'Precio Internacional (USD)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'itinerary',
      title: 'Itinerario (Español)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Cada día del tour como ítem separado',
    },
    {
      name: 'itineraryEn',
      title: 'Itinerary (English)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each day of the tour as separate item',
    },
    {
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número para ordenar los tours en la página',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'region',
      media: 'image',
    },
  },
}
