import { Breadcrumbs } from "../components/Breadcrumbs"
import { ContactForm } from "../components/ContactForm"
import { BusinessCard, FinalCta } from "../components/HomeSections"
import { PageHero } from "../components/Hero"
import { Seo } from "../components/Seo"
import { JsonLd } from "../components/JsonLd"
import { company, mapsEmbedUrl, seoConfig } from "../data/company"
import { images } from "../data/images"

export default function Contact() {
  const map = mapsEmbedUrl()
  return (
    <>
      <Seo
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        path="/contact"
      />
      <JsonLd />
      <PageHero
        kicker="Contact"
        title="Talk to GK Coating"
        body="Call, WhatsApp or send a quote request. Tell us the surface, the location and the service you need."
        image={images.cta}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <section className="container-site grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BusinessCard />
          <div className="mt-6 rounded-xl border border-white/10 bg-charcoal/70 p-4 text-xs text-offwhite/80 space-y-2">
            <p className="font-bold text-metal-light uppercase tracking-wider text-[11px]">Working Hours &amp; Response:</p>
            <p>• Monday – Saturday: 8:00 AM – 8:00 PM</p>
            <p>• 24/7 Mobile Sand Blasting Rig for Emergency Industrial Shutdowns</p>
            <p>• Fast response via WhatsApp for technical specs &amp; photo estimates</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-extrabold">Request a quote</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="container-site pb-16">
        <h2 className="text-2xl font-extrabold">Location</h2>
        <p className="mt-3 max-w-2xl text-offwhite/70">{company.address.full}</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="GK Coating location map"
            src={map}
            className="h-[360px] w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <FinalCta />
    </>
  )
}
