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

export const siteUrl = env("VITE_SITE_URL", "https://gkcoating.com").replace(/\/$/, "")

export const phones: Phone[] = [
  formatPhone(env("VITE_PHONE_PRIMARY", "+918825669481")),
  formatPhone(env("VITE_PHONE_SECONDARY", "+916379911288")),
]

const whatsappMessage = env(
  "VITE_WHATSAPP_MESSAGE",
  "Hello GK Coating, I would like to enquire about your sand blasting / coating services.",
)
const whatsappNumber = env("VITE_WHATSAPP_NUMBER", "918825669481").replace(/\D/g, "")

export const company = {
  name: env("VITE_COMPANY_NAME", "GK COATING"),
  shortName: env("VITE_COMPANY_SHORT_NAME", "GK Coating"),
  proprietor: env("VITE_PROPRIETOR", "Praveen Kumar K."),
  eyebrow: "SURFACE PREPARATION & PROTECTIVE COATING",
  tagline: "Surface Preparation & Protective Coating Solutions",
  supportingLine: "Prepare. Protect. Preserve.",
  description:
    "Leading sand blasting, thermal arc spray metallizing, industrial spray painting and temple stone blasting contractor serving all over Tamil Nadu & South India — for PEB structures, structural steel, tanks and heavy machinery.",
  gstin: env("VITE_GSTIN", "33DYCPP7577J1ZU"),
  location: env("VITE_LOCATION", "Thiruvalam, Vellore District, Tamil Nadu (Serving All Over Tamil Nadu)"),
  serviceArea: env("VITE_SERVICE_AREA", "All over Tamil Nadu & South India — Chennai, Coimbatore, Hosur, Salem, Trichy, Madurai, Ranipet, Vellore & Statewide"),
  mobileRigLabel: "24/7 Mobile Rig Fleet: All Over Tamil Nadu & South India",
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
    "Old coating removal",
    "Surface preparation",
    "Temple stone surfaces",
  ],
}

export const seoConfig = {
  defaultTitle: "GK Coating | Sand Blasting & Protective Coating All Over Tamil Nadu & South India",
  defaultDescription:
    "Top-rated Sand Blasting (Sa 2.5/Sa 3), Thermal Arc Spray Metallizing, Airless Spray Painting & Temple Stone Blasting all over Tamil Nadu & South India. 24/7 Mobile Rig Fleet.",
  home: {
    title: "Sand Blasting & Protective Coating All Over Tamil Nadu & South India | GK Coating",
    description:
      "Top-rated Sand Blasting (Sa 2.5/Sa 3), Thermal Arc Spray Metallizing, Airless Spray Painting & Temple Stone Blasting all over Tamil Nadu & South India. 24/7 Mobile Rig Fleet.",
  },
  services: {
    title: "Industrial Surface Coating & Sandblasting Services | All Over Tamil Nadu",
    description:
      "Comprehensive industrial surface treatment: Sand Blasting (Sa 2.5/Sa 3), Thermal Arc Spray Metallizing, Airless Spray Painting & Temple Stone Blasting all over Tamil Nadu & South India.",
  },
  sandblasting: {
    title: "Industrial Sand Blasting Services All Over Tamil Nadu | PEB Steel & Metal Blasting",
    description:
      "High-pressure industrial sand blasting (Sa 2.5 / Sa 3) for PEB structural steel, machinery, tanks and rust removal all over Tamil Nadu & South India. 24/7 Mobile rig.",
  },
  sprayPainting: {
    title: "Industrial Spray Painting Services All Over Tamil Nadu | Epoxy & PU Coating",
    description:
      "Airless spray painting, high-build epoxy primers and polyurethane topcoats for PEB structural steel, tanks and fabrications all over Tamil Nadu & South India.",
  },
  metallizing: {
    title: "Thermal Arc Spray Metallizing All Over Tamil Nadu | Zinc & Aluminium Coating",
    description:
      "Thermal arc spray metallizing (zinc & aluminum coating) for 25+ years anti-corrosion cathodic protection on industrial steel all over Tamil Nadu & South India.",
  },
  templeStone: {
    title: "Temple Stone Blasting & Heritage Restoration All Over Tamil Nadu | GK Coating",
    description:
      "Specialized low-pressure non-destructive micro-abrasive blasting for temple granite sculptures, ancient pillars, and heritage stone surfaces across Tamil Nadu.",
  },
  industries: {
    title: "Industries Served | PEB, Steel Fabrication, Boilers & Marine | Tamil Nadu",
    description:
      "Industrial surface preparation and protective coating solutions for PEB, structural steel, foundries, manufacturing, marine, and heritage sectors across Tamil Nadu.",
  },
  process: {
    title: "Our 6-Step Surface Preparation & Coating Process | ISO Quality Standards",
    description:
      "From inspection and abrasive profiling to multi-coat DFT verification and QC sign-off — explore our certified 6-step coating process.",
  },
  projects: {
    title: "Our Industrial Blasting & Coating Projects | Proven Track Record",
    description:
      "Explore completed sand blasting, spray painting, and metallizing projects across Tamil Nadu — PEB structures, machinery, and heritage restoration.",
  },
  about: {
    title: "About GK Coating | Leading Blasting & Coating Contractor in Tamil Nadu",
    description:
      "Learn about GK Coating — our leadership, quality standards, mobile fleet capabilities, and commitment to surface protection excellence across Tamil Nadu.",
  },
  contact: {
    title: "Contact GK Coating | Mobile Rig & Instant Quotes All Over Tamil Nadu",
    description:
      "Get an instant quote or schedule an on-site mobile sand blasting rig visit anywhere in Tamil Nadu and South India. Call or WhatsApp GK Coating.",
  },
} as const

export const serviceRegions = [
  {
    name: "Chennai & Northern Corridor",
    badge: "Automotive & Heavy Industry",
    distance: "Statewide Fleet",
    desc: "Comprehensive mobile blasting and coating rig service for industrial zones across Chennai, Sriperumbudur, Oragadam, Kanchipuram, and Tiruvallur.",
    services: ["Heavy PEB Warehouses", "Automotive Fixtures", "Chemical & Storage Tanks"],
  },
  {
    name: "Coimbatore, Salem & Hosur",
    badge: "Western Industrial Belt",
    distance: "Statewide Fleet",
    desc: "High-pressure abrasive profiling and thermal arc metallizing for foundries, precision machinery, textile frames, and steel fabrication yards.",
    services: ["Foundry Casting Cleaning", "Thermal Arc Metallizing", "Structural Frame Coating"],
  },
  {
    name: "Trichy, Madurai & South TN",
    badge: "Boiler & Marine Corridors",
    distance: "Statewide Fleet",
    desc: "Specialized surface preparation for high-pressure boilers, piping networks, industrial silos, marine tanks, and heritage temple stone restoration.",
    services: ["Boiler & Vessel Blasting", "Pipe Internal Profiling", "Temple Stone Restoration"],
  },
  {
    name: "Ranipet & Vellore (Central Yard)",
    badge: "Main Yard & Rig Hub",
    distance: "Central Blast Facility",
    desc: "Our central facility on Mariyamman Koil St, Thiruvalam plus dedicated on-site mobile compressor units serving Ranipet SIPCOT Phases 1-3, Katpadi, and Ambur.",
    services: ["In-House Blast Booth", "24/7 Mobile Rig Dispatch", "Airless Spray Painting"],
  },
] as const

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
