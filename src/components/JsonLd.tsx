import { company, siteUrl } from "../data/company"

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: company.shortName,
    legalName: company.name,
    description: company.description,
    url: siteUrl,
    telephone: company.phones.map((p) => p.e164),
    image: `${siteUrl}/favicon.svg`,
    founder: {
      "@type": "Person",
      name: company.proprietor,
    },
    vatID: company.gstin,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 437, Mariyamman Koil Street, Kugainallur Post",
      addressLocality: "Thiruvalam",
      addressRegion: "Tamil Nadu",
      postalCode: "632515",
      addressCountry: "IN",
    },
    areaServed: company.serviceArea,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Surface preparation services",
      itemListElement: [
        "Sand blasting",
        "Spray painting",
        "Temple stone blasting",
        "Metallizing",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
