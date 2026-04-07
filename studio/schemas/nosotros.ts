export default {
  name: 'nosotros',
  title: 'Nosotros',
  type: 'document',
  fields: [
    {
      name: 'vision',
      title: 'Visión (Español)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'visionEn',
      title: 'Vision (English)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mision',
      title: 'Misión (Español)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'misionEn',
      title: 'Mission (English)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'raicesTitulo',
      title: 'Título Raíces (Español)',
      type: 'string',
    },
    {
      name: 'raicesTituloEn',
      title: 'Raíces Título (English)',
      type: 'string',
    },
    {
      name: 'raicesTexto',
      title: 'Texto Raíces (Español)',
      type: 'text',
      rows: 4,
    },
    {
      name: 'raicesTextoEn',
      title: 'Raíces Texto (English)',
      type: 'text',
      rows: 4,
    },
    {
      name: 'raicesImagen',
      title: 'Imagen Raíces',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'anosExperiencia',
      title: 'Años de Experiencia',
      type: 'number',
      initialValue: 15,
    },
    {
      name: 'comunidades',
      title: 'Comunidades Aliadas',
      type: 'number',
      initialValue: 40,
    },
  ],
  preview: {
    select: {
      title: 'Visión',
    },
  },
}
