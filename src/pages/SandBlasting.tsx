import { Breadcrumbs } from "../components/Breadcrumbs"
import { BeforeAfter } from "../components/BeforeAfter"
import { FinalCta } from "../components/HomeSections"
import { Gallery } from "../components/Gallery"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { images } from "../data/images"
import { seoConfig } from "../data/company"
import { getService } from "../data/services"

const service = getService("sand-blasting")

export default function SandBlasting() {
  return (
    <>
      <Seo
        title={seoConfig.sandblasting.title}
        description={seoConfig.sandblasting.description}
        path={service.path}
      />
      <PageHero kicker="01 / Sand blasting" title={service.title} body={service.heroSubtitle} image={service.image} />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Sand Blasting" },
        ]}
      />
      <article className="bg-offwhite py-16 text-graphite md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="prose-industrial lg:col-span-7">
            <h2 className="text-3xl font-extrabold">What is sand blasting?</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Sand blasting — more broadly, abrasive blasting — uses compressed air and a selected abrasive
              media to clean and profile metal surfaces. It is commonly used before painting, metallizing or
              other protective coating stages.
            </p>
            <h2 className="mt-10 text-3xl font-extrabold">Why surface preparation matters</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Coating bonds to the surface they are applied to. Rust, mill scale, old paint and contaminants
              can interfere with that bond. Preparation is therefore the first practical step, not an optional
              extra. GK Coating does not claim specific blast grades or coating life unless they are defined
              in a project specification.
            </p>
            <h2 className="mt-10 text-3xl font-extrabold">Suitable applications</h2>
            <ul className="mt-4 grid gap-2 text-ink/80">
              {service.applications.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-3xl font-extrabold">PEB structures &amp; structural steel</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Pre-engineered buildings and structural steel assemblies often need large-area cleaning before
              protective coating. Blasting can be used on beams, columns, fabricated frames and related metal
              components where the material and site conditions are suitable.
            </p>
            <h2 className="mt-10 text-3xl font-extrabold">Rust and coating removal</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Where rust or an existing coating must be removed, blasting is one of the methods used to return
              the surface to a condition that is ready for the next specified operation.
            </p>
            <h2 className="mt-10 text-3xl font-extrabold">Surface preparation workflow</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Inspect the existing condition, select an appropriate preparation approach, blast as applicable,
              then hand the surface over for coating or finishing.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={images.steelFrame}
              alt="Structural steel frame suitable for abrasive blasting"
              className="img-grade w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="container-site mt-16 grid gap-8 lg:grid-cols-2">
          <BeforeAfter />
          <div>
            <h2 className="text-3xl font-extrabold">Before / after</h2>
            <p className="mt-4 text-ink/75">
              The comparison shows the difference between a contaminated metal surface and a cleaned surface
              prepared for the next coating stage.
            </p>
          </div>
        </div>
        <div className="container-site mt-16">
          <h2 className="mb-8 text-3xl font-extrabold">Gallery</h2>
          <Gallery />
        </div>
      </article>
      <FinalCta />
    </>
  )
}
