import { Seo } from "../components/Seo"
import { Hero, TrustStrip } from "../components/Hero"
import {
  AboutBlock,
  ApplicationsSection,
  BeforeAfterSection,
  ContactCta,
  GallerySection,
  Introduction,
  PebFeature,
  ProcessSection,
  QuoteSection,
  ServicesSection,
  WhyPrep,
} from "../components/HomeSections"
import { JsonLd } from "../components/JsonLd"

export default function Home() {
  return (
    <>
      <Seo
        title="GK Coating | Sand Blasting, Spray Painting & Metallizing in Vellore"
        description="GK Coating provides sand blasting, spray painting, temple stone blasting and metallizing services for PEB, steel structures and industrial metal surfaces in Thiruvalam, Vellore, Tamil Nadu."
        path="/"
      />
      <JsonLd />
      <Hero />
      <TrustStrip />
      <Introduction />
      <ServicesSection />
      <PebFeature />
      <BeforeAfterSection />
      <ProcessSection />
      <ApplicationsSection />
      <WhyPrep />
      <GallerySection />
      <AboutBlock />
      <ContactCta />
      <QuoteSection />
    </>
  )
}
