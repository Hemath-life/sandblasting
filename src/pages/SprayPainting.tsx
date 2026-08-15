import { Breadcrumbs } from "../components/Breadcrumbs"
import { FinalCta } from "../components/HomeSections"
import { Gallery } from "../components/Gallery"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { images } from "../data/images"
import { getService } from "../data/services"

const service = getService("spray-painting")

export default function SprayPainting() {
  return (
    <>
      <Seo
        title="Industrial Spray Painting in Vellore | GK Coating"
        description="Industrial spray painting for prepared PEB structures, steel fabrication and metal components in Thiruvalam, Vellore."
        path={service.path}
      />
      <PageHero kicker="02 / Spray painting" title={service.title} body={service.heroSubtitle} image={service.image} />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Spray Painting" },
        ]}
      />
      <article className="bg-offwhite py-16 text-graphite md:py-24">
        <div className="container-site max-w-4xl">
          <h2 className="text-3xl font-extrabold">Industrial spray painting</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Spray painting is used to apply specified coatings to prepared industrial surfaces. Coverage,
            film build and appearance depend on the coating system, application conditions and the quality of
            the surface underneath.
          </p>
          <h2 className="mt-10 text-3xl font-extrabold">Suitable surfaces</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Typical work includes PEB structures, steel fabrication, metal components and other industrial
            metal surfaces that have been prepared for coating.
          </p>
          <h2 className="mt-10 text-3xl font-extrabold">Surface preparation</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Painting is treated as a later stage. GK Coating&apos;s approach is to prepare first — removing
            rust, loose coatings and contaminants where applicable — so the specified paint system has a
            cleaner foundation.
          </p>
          <h2 className="mt-10 text-3xl font-extrabold">Application process</h2>
          <ol className="mt-4 space-y-3 text-ink/80">
            <li>01 — Review the surface and specified coating.</li>
            <li>02 — Prepare the surface as required for the project.</li>
            <li>03 — Apply spray coating under suitable site conditions.</li>
            <li>04 — Inspect the finished application against the brief.</li>
          </ol>
        </div>
        <div className="container-site mt-12">
          <img
            src={images.paintBooth}
            alt="Industrial spray painting on a prepared metal surface"
            className="img-grade max-h-[480px] w-full rounded-2xl object-cover"
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
