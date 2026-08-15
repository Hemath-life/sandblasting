import { Breadcrumbs } from "../components/Breadcrumbs"
import { FinalCta } from "../components/HomeSections"
import { PageHero } from "../components/Hero"
import { ProcessSteps } from "../components/ProcessSteps"
import { Seo } from "../components/Seo"
import { images } from "../data/images"

export default function Process() {
  return (
    <>
      <Seo
        title="Our Process | Surface Preparation Workflow | GK Coating"
        description="Inspect, prepare, blast and finish — GK Coating’s clear path from surface condition to coating-ready steel and stone."
        path="/process"
      />
      <PageHero
        kicker="Process"
        title="From surface condition to finished preparation"
        body="A restrained, repeatable sequence that keeps coating work grounded in the condition of the substrate."
        image={images.mill}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Process" }]} />
      <section className="bg-mist py-16 text-graphite md:py-24">
        <div className="container-site">
          <ProcessSteps />
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {["Old / contaminated surface", "Blasting / preparation", "Clean surface", "Protective coating"].map(
              (item, i) => (
                <div key={item} className="border border-black/10 bg-white p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-brand-dark">0{i + 1}</p>
                  <p className="mt-3 font-extrabold uppercase tracking-wide">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
