export default {
  name: 'nosotros',
  title: 'Nosotros - About Us',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      name: 'logo',
      title: 'Logo Principal',
      type: 'image',
      description: 'Logo que aparece arriba del About Us',
    },
    {
      name: 'visionTitulo',
      title: 'Título Visión (Español)',
      type: 'string',
    },
    {
      name: 'visionTituloEn',
      title: 'Vision Title (English)',
      type: 'string',
    },
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
      name: 'visionImagen',
      title: 'Imagen Visión',
      type: 'image',
      description: 'Imagen de fondo para la sección de Visión (antes banner-andes.png)',
    },
    {
      name: 'misionTitulo',
      title: 'Título Misión (Español)',
      type: 'string',
    },
    {
      name: 'misionTituloEn',
      title: 'Mission Title (English)',
      type: 'string',
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
      name: 'misionImagen',
      title: 'Imagen Misión',
      type: 'image',
      description: 'Imagen de fondo para la sección de Misión (antes galapagos-signature.jpeg)',
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
      name: 'raicesSubtitulo',
      title: 'Subtítulo Raíces (Español)',
      type: 'string',
    },
    {
      name: 'raicesSubtituloEn',
      title: 'Raíces Subtitle (English)',
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
      title: 'raicesTitulo',
      subtitle: 'vision',
    },
  },
}
