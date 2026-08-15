import { Breadcrumbs } from "../components/Breadcrumbs"
import { FinalCta } from "../components/HomeSections"
import { Gallery } from "../components/Gallery"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { images } from "../data/images"
import { getService } from "../data/services"

const service = getService("temple-stone-blasting")

export default function TempleStoneBlasting() {
  return (
    <>
      <Seo
        title="Temple Stone Blasting | GK Coating Vellore"
        description="Controlled temple stone blasting and architectural stone surface treatment in Thiruvalam, Vellore, Tamil Nadu."
        path={service.path}
      />
      <PageHero kicker="03 / Stone" title={service.title} body={service.heroSubtitle} image={service.image} />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Temple Stone Blasting" },
        ]}
      />
      <article className="bg-offwhite py-16 text-graphite md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Stone surface treatment</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Temple stone blasting is a controlled cleaning and preparation method for suitable stone and
              architectural surfaces. The aim is to treat the surface with care, not to force a one-size
              industrial process onto heritage fabric.
            </p>
            <h2 className="mt-10 text-3xl font-extrabold">Cleaning and preparation</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Work is assessed against the material, existing deposits and the intended next stage. Methods
              are selected to suit the stone rather than the other way around.
            </p>
            <h2 className="mt-10 text-3xl font-extrabold">Architectural &amp; temple applications</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Suitable projects may include temple stone, architectural stone, restoration preparation and
              surface cleaning where blasting is an appropriate tool.
            </p>
            <h2 className="mt-10 text-3xl font-extrabold">Controlled treatment</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Pressure, media and coverage are treated as project decisions. GK Coating does not claim
              restoration certifications or guaranteed historic outcomes.
            </p>
          </div>
          <img
            src={images.indiaTemple}
            alt="Jalakandeswarar Temple stone architecture in Vellore, Tamil Nadu"
            className="img-grade h-full min-h-[360px] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="container-site mt-16">
          <h2 className="mb-8 text-3xl font-extrabold">Project imagery</h2>
          <Gallery />
        </div>
      </article>
      <FinalCta />
    </>
  )
}
