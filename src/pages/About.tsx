import { Breadcrumbs } from "../components/Breadcrumbs"
import { BusinessCard, FinalCta } from "../components/HomeSections"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { JsonLd } from "../components/JsonLd"
import { company } from "../data/company"
import { images } from "../data/images"
import { services } from "../data/services"

export default function About() {
  return (
    <>
      <Seo
        title="About GK Coating | Surface Preparation in Thiruvalam, Vellore"
        description="GK Coating is a surface preparation and protective coating company in Thiruvalam, Vellore, led by proprietor Praveen Kumar K."
        path="/about"
      />
      <JsonLd />
      <PageHero
        kicker="About"
        title="Professional surface preparation for demanding surfaces"
        body="GK Coating is based in Thiruvalam, Vellore, Tamil Nadu and provides surface treatment and coating-related services for industrial and architectural applications."
        image={images.intro}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
      <section className="bg-offwhite py-16 text-graphite md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold">GK Coating</h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              The company is positioned around surface preparation plus protective coating — not painting
              alone. Work covers sand blasting, spray painting, temple stone blasting and metallizing for PEB
              structures, structural steel, metal components and suitable stone surfaces.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              Proprietor {company.proprietor} operates from {company.address.compact} Enquiries are
              taken by phone and WhatsApp for {company.serviceArea}.
            </p>
            <ul className="mt-8 grid gap-2 font-semibold uppercase tracking-[0.16em] text-brand-dark">
              {services.map((s) => (
                <li key={s.id}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <BusinessCard />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
