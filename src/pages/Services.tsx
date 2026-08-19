import { Breadcrumbs } from "../components/Breadcrumbs"
import { FinalCta } from "../components/HomeSections"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { seoConfig } from "../data/company"
import { ServiceCard } from "../components/ServiceCard"
import { images } from "../data/images"
import { services } from "../data/services"

export default function Services() {
  return (
    <>
      <Seo
        title={seoConfig.services.title}
        description={seoConfig.services.description}
        path="/services"
      />
      <PageHero
        kicker="Services"
        title="Surface-first industrial services"
        body="Four connected capabilities for PEB, steel, metal and stone — starting with the condition of the surface."
        image={images.blasting}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
      <section className="container-site grid gap-6 py-16 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
      <FinalCta />
    </>
  )
}
