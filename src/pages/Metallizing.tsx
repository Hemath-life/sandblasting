import { Breadcrumbs } from "../components/Breadcrumbs"
import { FinalCta } from "../components/HomeSections"
import { Gallery } from "../components/Gallery"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { seoConfig } from "../data/company"
import { images } from "../data/images"
import { getService } from "../data/services"

const service = getService("metallizing")

export default function Metallizing() {
  return (
    <>
      <Seo
        title={seoConfig.metallizing.title}
        description={seoConfig.metallizing.description}
        path={service.path}
      />
      <PageHero kicker="04 / Metallizing" title={service.title} body={service.heroSubtitle} image={service.image} />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Metallizing" },
        ]}
      />
      <article className="bg-offwhite py-16 text-graphite md:py-24">
        <div className="container-site max-w-4xl">
          <h2 className="text-3xl font-extrabold">What is metallizing?</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Metallizing is a protective metallic coating process applied to suitably prepared metal surfaces.
            It is typically used as part of a corrosion-protection system for structural steel and industrial
            components.
          </p>
          <h2 className="mt-10 text-3xl font-extrabold">Suitable applications</h2>
          <ul className="mt-4 space-y-2 text-ink/80">
            {service.applications.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <h2 className="mt-10 text-3xl font-extrabold">Steel structures &amp; surface preparation</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Metallic coating performs best on a clean, appropriately prepared substrate. Blasting or other
            preparation methods may be required before metallizing, depending on the existing surface
            condition and the specified system.
          </p>
          <h2 className="mt-10 text-3xl font-extrabold">Protective coating concept</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Metallizing is one stage in a protection sequence — not a standalone promise of coating life.
            Durability depends on specification, environment, application and maintenance.
          </p>
          <h2 className="mt-10 text-3xl font-extrabold">Process</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Inspect, prepare, apply the metallic coating, then proceed to any subsequent finishing coats if
            specified.
          </p>
        </div>
        <div className="container-site mt-12">
          <img
            src={images.metalTexture}
            alt="Metallic industrial surface"
            className="img-grade max-h-[440px] w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <h2 className="mb-8 mt-16 text-3xl font-extrabold">Gallery</h2>
          <Gallery />
        </div>
      </article>
      <FinalCta />
    </>
  )
}
