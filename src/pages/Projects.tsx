import { Breadcrumbs } from "../components/Breadcrumbs"
import { Gallery } from "../components/Gallery"
import { FinalCta } from "../components/HomeSections"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { images } from "../data/images"

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects | Industrial Surface Preparation Gallery | GK Coatings"
        description="Gallery of PEB steel, structural blasting, rust removal, spray painting, metallizing and temple stone work from GK Coatings."
        path="/projects"
      />
      <PageHero
        kicker="Projects"
        title="Industrial surfaces, documented"
        body="A visual record of steel, PEB, coatings and stone surfaces — representative of the work GK Coatings is built around."
        image={images.fabrication}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects" }]} />
      <section className="container-site py-16">
        <Gallery />
      </section>
      <FinalCta />
    </>
  )
}
