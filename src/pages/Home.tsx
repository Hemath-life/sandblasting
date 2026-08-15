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
        title="Sand Blasting in Vellore, Ranipet & Thiruvalam | GK Coating | Mobile Rig"
        description="Top-rated Sand Blasting, Thermal Arc Spray Metallizing, Airless Spray Painting & Temple Stone Blasting in Thiruvalam, Vellore, Ranipet SIPCOT, Tamil Nadu. Mobile on-site rig available."
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
