import { Seo } from "../components/Seo"
import { seoConfig } from "../data/company"
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
  FinalCta,
  QuoteSection,
  ServicesSection,
  WhyPrep,
  LocalServiceAreasSection,
} from "../components/HomeSections"
import { JsonLd } from "../components/JsonLd"

export default function Home() {
  return (
    <>
      <Seo
        title={seoConfig.home.title}
        description={seoConfig.home.description}
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
      <LocalServiceAreasSection />
      <GallerySection />
      <AboutBlock />
      <ContactCta />
      <QuoteSection />
      <FinalCta />
    </>
  )
}
