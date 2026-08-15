import { ArrowUpRight } from "lucide-react"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { FinalCta } from "../components/HomeSections"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { applications } from "../data/projects"
import { images } from "../data/images"

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries | PEB, Steel & Metal Surface Preparation | GK Coating"
        description="Surface preparation for PEB buildings, structural steel, industrial fabrication, machinery, metal components and temple stone in Vellore."
        path="/industries"
      />
      <PageHero
        kicker="Industries"
        title="Where preparation meets industrial work"
        body="GK Coating supports PEB contractors, steel fabricators, industrial plants and architectural stone projects in Vellore and surrounding industrial areas."
        image={images.steelWarehouse}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Industries" }]} />
      <section className="container-site grid gap-6 py-16 md:grid-cols-2">
        {applications.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal">
            <img src={item.image} alt={item.title} className="img-grade h-64 w-full object-cover" loading="lazy" />
            <div className="p-6">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide">{item.title}</h2>
              <p className="mt-3 text-offwhite/70">{item.description}</p>
              <ArrowUpRight className="mt-4 h-5 w-5 text-metal-light" aria-hidden />
            </div>
          </article>
        ))}
      </section>
      <FinalCta />
    </>
  )
}
