import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Etsaa Tours')
    .items([
      S.documentTypeListItem('tour').title('Tours'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.documentTypeListItem('nosotros').title('Nosotros'),
      S.documentTypeListItem('permiso').title('Permisos Legales'),
      ...S.documentTypeListItems(),
    ])
