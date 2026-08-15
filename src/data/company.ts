export const siteUrl =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "https://www.gkcoating.in"

export const phones = [
  {
    label: "+91 88256 69481",
    display: "88256 69481",
    tel: "tel:+918825669481",
    e164: "+918825669481",
  },
  {
    label: "+91 63799 11288",
    display: "63799 11288",
    tel: "tel:+916379911288",
    e164: "+916379911288",
  },
] as const

const whatsappMessage =
  "Hello GK Coating, I would like to enquire about your sand blasting / coating services."

export const company = {
  name: "GK COATING",
  shortName: "GK Coating",
  proprietor: "Praveen Kumar K.",
  eyebrow: "SURFACE PREPARATION & PROTECTIVE COATINGS",
  tagline: "Surface Preparation & Protective Coating Solutions",
  supportingLine: "Prepare. Protect. Preserve.",
  description:
    "Professional sand blasting, spray painting, temple stone blasting and metallizing solutions for PEB, steel structures and industrial surfaces.",
  gstin: "33DYCPP7577J1ZU",
  location: "Thiruvalam, Vellore, Tamil Nadu",
  serviceArea: "Vellore and surrounding industrial areas",
  address: {
    line1: "No. 437, Mariyamman Koil Street",
    line2: "Kugainallur Post",
    line3: "Thiruvalam, Vellore District – 632515",
    line4: "Tamil Nadu, India.",
    compact: "No. 437, Mariyamman Koil Street, Kugainallur Post, Thiruvalam, Vellore District – 632515.",
    full: "No. 437, Mariyamman Koil Street, Kugainallur Post, Thiruvalam, Vellore District – 632515, Tamil Nadu, India.",
  },
  phones,
  primaryPhone: phones[0],
  whatsappUrl: `https://wa.me/918825669481?text=${encodeURIComponent(whatsappMessage)}`,
  whatsappMessage,
  servicesLine: "Sand Blasting, Spray Painting, Temple Stone Blasting & Metallizing",
  applications: [
    "PEB structures",
    "Structural steel",
    "Steel fabrication",
    "Industrial metal components",
    "Metal surfaces",
    "Machinery and equipment",
    "Rust removal",
    "Old coating removal",
    "Surface preparation",
    "Temple stone surfaces",
  ],
} as const

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
  const configured = import.meta.env.VITE_GOOGLE_MAPS_URL
  if (configured) return configured
  const query = encodeURIComponent(company.address.full)
  return `https://maps.google.com/maps?q=${query}&z=15&output=embed`
}
