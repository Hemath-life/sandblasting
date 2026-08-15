import { Breadcrumbs } from "../components/Breadcrumbs"
import { Gallery } from "../components/Gallery"
import { FinalCta } from "../components/HomeSections"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { seoConfig } from "../data/company"
import { images } from "../data/images"

export default function Projects() {
  return (
    <>
      <Seo
        title={seoConfig.projects.title}
        description={seoConfig.projects.description}
        path="/projects"
      />
      <PageHero
        kicker="Projects"
        title="Industrial surfaces, documented"
        body="A visual record of steel, PEB, coating and stone surfaces — representative of the work GK Coating is built around."
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
