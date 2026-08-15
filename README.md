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

## Production build

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` and set:

- `VITE_SITE_URL` — canonical site URL
- `VITE_GOOGLE_MAPS_URL` — optional Maps embed URL
- `VITE_CONTACT_API_URL` — optional form endpoint (Formspree, EmailJS proxy, custom API)

Without a contact API URL, the enquiry form validates on the client and shows a success state so it can be wired later. Call and WhatsApp CTAs remain the primary conversion paths.

## Business details

All company, service and project copy lives in `src/data/`.
