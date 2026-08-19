# GK Coating

Premium industrial website for **GK Coating** — sand blasting, spray painting, temple stone blasting and metallizing in Thiruvalam, Vellore, Tamil Nadu.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Public business details are already in `.env`. Copy `.env.example` if you need a fresh file.

## Production build

```bash
npm run build
npm run preview
```

## Environment

Company, contact, maps and site URL values live in `.env` / `.env.example` (all `VITE_` prefixed). The app reads them from `src/data/company.ts`.

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Canonical URL, Open Graph, sitemap, structured data |
| `VITE_GOOGLE_MAPS_URL` | Contact page embed (address query, no invented coordinates) |
| `VITE_CONTACT_API_URL` | Optional form endpoint (Formspree, custom API, etc.) |
| `VITE_COMPANY_NAME` / `VITE_COMPANY_SHORT_NAME` | Brand name |
| `VITE_PROPRIETOR` | Proprietor |
| `VITE_GSTIN` | GSTIN |
| `VITE_LOCATION` / `VITE_SERVICE_AREA` | Local SEO location copy |
| `VITE_ADDRESS_*` | Address lines used on the site, map fallback and JSON-LD |
| `VITE_PHONE_PRIMARY` / `VITE_PHONE_SECONDARY` | `tel:` links |
| `VITE_WHATSAPP_NUMBER` / `VITE_WHATSAPP_MESSAGE` | Floating WhatsApp button |

Do not put private API keys in these files. `VITE_` values are exposed to the browser.

Without `VITE_CONTACT_API_URL`, the enquiry form validates on the client and shows a success state so it can be wired later. Call and WhatsApp CTAs remain the primary conversion paths.

Service and project copy stays in `src/data/`.
