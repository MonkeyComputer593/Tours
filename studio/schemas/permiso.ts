export default {
  name: 'permiso',
  title: 'Permisos Legales',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título (Español)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tituloEn',
      title: 'Title (English)',
      type: 'string',
    },
    {
      name: 'tipo',
      title: 'Tipo de Permiso',
      type: 'string',
      options: {
        list: [
          { title: 'Bomberos', value: 'bomberos' },
          { title: 'Compañía', value: 'compania' },
          { title: 'Viceministerio de Turismo', value: 'viceministerio' },
          { title: 'RUC', value: 'ruc' },
          { title: 'Licencia Única de Funcionamiento', value: 'licencia' },
          { title: 'Otro', value: 'otro' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'documento',
      title: 'Documento PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
    {
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'tipo',
    },
  },
}
