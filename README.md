# ETSAA Tours - Ecuador Adventure Tours

Website: https://www.etsaatours.com

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- Sanity CMS (content management)
- Vercel (hosting)

## Development

```bash
npm install
npm run dev
```

## Sanity Studio

Edit content at: https://etsaa-tours.sanity.studio/

### Content Types
- **Tours** - Tour packages
- **FAQs** - Frequently asked questions
- **Nosotros** - About us page content (vision, mission, roots, etc.)
- **Permisos Legales** - Legal permits/licenses (PDF downloads)

## Deploy

Automatic deploy to Vercel on push to main branch.

```bash
git add -A
git commit -m "your message"
git push origin main
```

## Environment Variables

Create `.env` file:
```
VITE_SANITY_PROJECT_ID=pc54az1o
VITE_SANITY_DATASET=production
```
