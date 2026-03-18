export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Pregunta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'questionEn',
      title: 'Question (English)',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Respuesta',
      type: 'text',
      rows: 3,
    },
    {
      name: 'answerEn',
      title: 'Answer (English)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'question',
    },
  },
}
