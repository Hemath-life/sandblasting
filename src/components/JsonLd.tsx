import { company, siteUrl } from "../data/company"

export function JsonLd() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor", "ProfessionalService"],
    "@id": `${siteUrl}/#localbusiness`,
    name: "GK Coating - Sand Blasting & Industrial Coating",
    alternateName: ["GK Coating", "GK Coating Thiruvalam", "GK Sand Blasting Vellore"],
    legalName: company.name,
    description:
      "GK Coating is a premier industrial surface preparation and protective coating contractor in Thiruvalam, Vellore & Ranipet, Tamil Nadu. Specializing in high-pressure Sand Blasting (Sa 2.5 / Sa 3), Thermal Arc Spray Metallizing, Airless Spray Painting, and Temple Stone Blasting for PEB structures, structural steel, and industrial machinery.",
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    image: [
      `${siteUrl}/favicon.svg`,
      `${siteUrl}/og.jpg`,
    ],
    telephone: company.phones.map((p) => p.e164),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI, Cheque",
    founder: {
      "@type": "Person",
      name: company.proprietor,
      jobTitle: "Proprietor & Engineering Lead",
    },
    vatID: company.gstin,
    taxID: company.gstin,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9856,
      longitude: 79.2435,
    },
    areaServed: [
      { "@type": "City", name: "Thiruvalam" },
      { "@type": "City", name: "Vellore" },
      { "@type": "City", name: "Ranipet" },
      { "@type": "AdministrativeArea", name: "SIPCOT Industrial Complex Ranipet" },
      { "@type": "City", name: "Katpadi" },
      { "@type": "City", name: "Walajapet" },
      { "@type": "City", name: "Arcot" },
      { "@type": "City", name: "Ambur" },
      { "@type": "City", name: "Vaniyambadi" },
      { "@type": "City", name: "Arakkonam" },
      { "@type": "City", name: "Kanchipuram" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "52",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Surface Preparation & Protective Coating Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial Sand Blasting",
            serviceType: "Abrasive Sandblasting Sa 2.5 / Sa 3",
            description: "High-pressure abrasive blasting for PEB steel, rust removal, mill scale elimination, and surface profiling in Vellore, Ranipet and Thiruvalam.",
            areaServed: "Vellore, Ranipet, Thiruvalam, Tamil Nadu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Thermal Arc Spray Metallizing",
            serviceType: "Molten Zinc and Aluminum Corrosion Shield",
            description: "Twin-wire thermal arc spray metallizing offering 25+ years cathodic rust prevention for heavy industrial structural steel.",
            areaServed: "Tamil Nadu, Vellore, Ranipet",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airless Industrial Spray Painting",
            serviceType: "Epoxy & Polyurethane Multi-Coat Barrier",
            description: "Precision high-build epoxy, zinc-rich primer, and polyurethane topcoat application with verified dry film thickness (DFT).",
            areaServed: "Vellore, Ranipet, Thiruvalam",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Temple Stone Blasting & Heritage Restoration",
            serviceType: "Gentle Micro-Abrasive Stone Cleaning",
            description: "Non-destructive low-pressure blasting for ancient granite temple carvings, mantapams, and heritage structures in Tamil Nadu.",
            areaServed: "Tamil Nadu, South India",
          },
        },
      ],
    },
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />
  )
}
