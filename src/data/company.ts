function env(name: keyof ImportMetaEnv, fallback = ""): string {
  return import.meta.env[name]?.trim() || fallback
}

export type Phone = {
  label: string
  display: string
  tel: string
  e164: string
}

export function formatPhone(raw: string): Phone {
  const digits = raw.replace(/\D/g, "")
  const e164 = `+${digits}`
  const local = digits.startsWith("91") ? digits.slice(2) : digits
  const grouped =
    local.length === 10 ? `${local.slice(0, 5)} ${local.slice(5)}` : local
  return {
    label: digits.startsWith("91") ? `+91 ${grouped}` : e164,
    display: grouped,
    tel: `tel:${e164}`,
    e164,
  }
}

export const siteUrl = env("VITE_SITE_URL", "https://www.gkcoatings.in").replace(/\/$/, "")

export const phones: Phone[] = [
  formatPhone(env("VITE_PHONE_PRIMARY", "+918825669481")),
  formatPhone(env("VITE_PHONE_SECONDARY", "+916379911288")),
]

const whatsappMessage = env(
  "VITE_WHATSAPP_MESSAGE",
  "Hello GK Coatings, I would like to enquire about your sand blasting / coatings services.",
)
const whatsappNumber = env("VITE_WHATSAPP_NUMBER", "918825669481").replace(/\D/g, "")

export const company = {
  name: env("VITE_COMPANY_NAME", "GK COATINGS"),
  shortName: env("VITE_COMPANY_SHORT_NAME", "GK Coatings"),
  proprietor: env("VITE_PROPRIETOR", "Praveen Kumar K."),
  eyebrow: "SURFACE PREPARATION & PROTECTIVE COATINGS",
  tagline: "Surface Preparation & Protective Coatings Solutions",
  supportingLine: "Prepare. Protect. Preserve.",
  description:
    "Professional sand blasting, spray painting, temple stone blasting and metallizing solutions for PEB, steel structures and industrial surfaces.",
  gstin: env("VITE_GSTIN", "33DYCPP7577J1ZU"),
  location: env("VITE_LOCATION", "Thiruvalam, Vellore, Tamil Nadu"),
  serviceArea: env("VITE_SERVICE_AREA", "Vellore and surrounding industrial areas"),
  address: {
    line1: env("VITE_ADDRESS_LINE1", "No. 437, Mariyamman Koil Street"),
    line2: env("VITE_ADDRESS_LINE2", "Kugainallur Post"),
    line3: env("VITE_ADDRESS_LINE3", "Thiruvalam, Vellore District – 632515"),
    line4: env("VITE_ADDRESS_LINE4", "Tamil Nadu, India."),
    street: env("VITE_ADDRESS_STREET", "No. 437, Mariyamman Koil Street, Kugainallur Post"),
    locality: env("VITE_ADDRESS_LOCALITY", "Thiruvalam"),
    region: env("VITE_ADDRESS_REGION", "Tamil Nadu"),
    postalCode: env("VITE_ADDRESS_POSTAL_CODE", "632515"),
    country: env("VITE_ADDRESS_COUNTRY", "IN"),
    compact: env(
      "VITE_ADDRESS_COMPACT",
      "No. 437, Mariyamman Koil Street, Kugainallur Post, Thiruvalam, Vellore District – 632515.",
    ),
    full: env(
      "VITE_ADDRESS_FULL",
      "No. 437, Mariyamman Koil Street, Kugainallur Post, Thiruvalam, Vellore District – 632515, Tamil Nadu, India.",
    ),
  },
  phones,
  primaryPhone: phones[0],
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  whatsappMessage,
  servicesLine: env(
    "VITE_SERVICES_LINE",
    "Sand Blasting, Spray Painting, Temple Stone Blasting & Metallizing",
  ),
  contactApiUrl: env("VITE_CONTACT_API_URL"),
  applications: [
    "PEB structures",
    "Structural steel",
    "Steel fabrication",
    "Industrial metal components",
    "Metal surfaces",
    "Machinery and equipment",
    "Rust removal",
    "Old coatings removal",
    "Surface preparation",
    "Temple stone surfaces",
  ],
}

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Process", to: "/process" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const

export function mapsEmbedUrl(): string {
  const configured = env("VITE_GOOGLE_MAPS_URL")
  if (configured) return configured
  const query = encodeURIComponent(company.address.full)
  return `https://maps.google.com/maps?q=${query}&z=15&output=embed`
}
