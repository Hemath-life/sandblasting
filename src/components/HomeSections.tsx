import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { company } from "../data/company"
import { images } from "../data/images"
import { applications } from "../data/projects"
import { services } from "../data/services"
import { ButtonAnchor, ButtonLink } from "./Buttons"
import { ContactForm } from "./ContactForm"
import { BeforeAfter } from "./BeforeAfter"
import { ProcessSteps } from "./ProcessSteps"
import { SectionHeading } from "./SectionHeading"
import { ServiceCard } from "./ServiceCard"
import { Gallery } from "./Gallery"

export function Introduction() {
  return (
    <section className="bg-offwhite py-20 text-graphite md:py-28">
      <div className="container-site grid items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:pb-8">
          <SectionHeading
            kicker="01 / Who we are"
            title="Surface preparation that gives every coating a stronger foundation."
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75">
            GK Coating provides professional surface preparation and coating services for steel
            structures, PEB structures, metal components and other industrial surfaces in{" "}
            {company.location}.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75">
            Proper preparation can help remove rust, old coatings, mill scale, dirt, oxidation and
            surface contaminants, and prepares surfaces for subsequent protective coating operations.
          </p>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7 lg:-mt-10">
          <div className="absolute -left-6 top-8 hidden h-24 w-px bg-metal lg:block" />
          <img
            src={images.intro}
            alt="Industrial fabrication environment with steel components ready for surface treatment"
            className="img-grade h-[460px] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="bg-graphite py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          light
          kicker="02 / What we do"
          title="Four services. One surface-first approach."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function PebFeature() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img
        src={images.peb}
        alt="Large PEB steel structure in an industrial fabrication environment"
        className="img-grade absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/80 to-graphite/40" />
      <div className="container-site relative">
        <p className="text-[11px] uppercase tracking-[0.28em] text-metal-light">03 / Steel</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          MADE FOR STEEL.
          <br />
          READY FOR INDUSTRY.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-offwhite/75">
          Surface preparation solutions for PEB structures, structural steel and fabricated metal
          components.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["01", "PEB Structures"],
            ["02", "Structural Steel"],
            ["03", "Fabricated Metal"],
          ].map(([num, label]) => (
            <div key={num} className="border border-white/15 bg-graphite/55 p-6 backdrop-blur-sm">
              <p className="text-[11px] text-metal-light">{num}</p>
              <p className="mt-3 text-lg font-bold uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink to="/contact#quote">Discuss your project →</ButtonLink>
        </div>
      </div>
    </section>
  )
}

export function BeforeAfterSection() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            light
            kicker="04 / Condition"
            title="From rusted to ready."
            body="A properly prepared surface is the starting point for the next stage of protection."
          />
        </div>
        <div className="lg:col-span-7">
          <BeforeAfter />
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="steel-grid bg-mist py-20 text-graphite md:py-28">
      <div className="container-site">
        <SectionHeading
          kicker="05 / Our process"
          title="A clear path from surface condition to finished preparation."
        />
        <ProcessSteps />
      </div>
    </section>
  )
}

export function ApplicationsSection() {
  return (
    <section className="bg-offwhite py-20 text-graphite md:py-28">
      <div className="container-site">
        <SectionHeading kicker="06 / Applications" title="Where our services fit" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((item) => (
            <Link
              key={item.title}
              to="/industries"
              className="group relative min-h-[280px] overflow-hidden rounded-2xl"
            >
              <img src={item.image} alt={item.title} className="img-grade h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-offwhite">
                <h3 className="text-xl font-extrabold uppercase tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm text-offwhite/75">{item.description}</p>
                <ArrowUpRight className="mt-4 h-5 w-5 text-metal-light transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyPrep() {
  const stages = [
    "Contaminated surface",
    "Surface preparation",
    "Clean / profiled surface",
    "Protective coating",
  ]
  return (
    <section className="bg-graphite py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <SectionHeading
          light
          kicker="07 / Why it matters"
          title="Why surface preparation matters"
          body="The quality of a coating system starts with the condition of the surface beneath it. GK Coating positions every project around this sequence: inspect the existing surface, prepare it, then apply the specified coating stage."
        />
        <ol className="border border-white/10 bg-charcoal p-8">
          {stages.map((stage, index) => (
            <li key={stage} className="flex gap-5 border-b border-white/10 py-5 last:border-0">
              <span className="text-metal-light">0{index + 1}</span>
              <div>
                <p className="font-extrabold uppercase tracking-[0.16em]">{stage}</p>
                {index < stages.length - 1 ? (
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/30">↓</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function AboutBlock() {
  return (
    <section className="bg-offwhite py-20 text-graphite md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            kicker="09 / About"
            title="GK Coating"
            body="Professional surface preparation for demanding surfaces."
          />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75">
            GK Coating is based in Thiruvalam, Vellore, Tamil Nadu and provides surface treatment
            and coating-related services for industrial and architectural applications across Vellore
            and surrounding industrial areas.
          </p>
          <ul className="mt-6 grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-dark">
            {services.map((s) => (
              <li key={s.id}>— {s.title}</li>
            ))}
          </ul>
        </div>
        <aside className="lg:col-span-5">
          <BusinessCard />
        </aside>
      </div>
    </section>
  )
}

export function BusinessCard() {
  return (
    <div className="border border-black/10 bg-graphite p-8 text-offwhite shadow-xl">
      <p className="text-[11px] uppercase tracking-[0.3em] text-metal-light">Company</p>
      <h3 className="mt-3 text-3xl font-extrabold tracking-[0.12em]">GK COATING</h3>
      <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{company.servicesLine}</p>
      <p className="mt-6 text-sm">
        Prop: <span className="font-semibold">{company.proprietor}</span>
      </p>
      <p className="mt-2 text-sm text-offwhite/70">GSTIN {company.gstin}</p>
      <address className="mt-6 text-sm not-italic leading-relaxed text-offwhite/75">
        {company.address.compact}
      </address>
      <div className="mt-6 space-y-2">
        {company.phones.map((phone) => (
          <a key={phone.tel} href={phone.tel} className="block text-lg font-bold text-metal-light">
            {phone.display}
          </a>
        ))}
      </div>
    </div>
  )
}

export function ContactCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <img src={images.cta} alt="" className="img-grade absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-graphite/80" />
      <div className="container-site relative text-center">
        <h2 className="text-3xl font-extrabold md:text-5xl">Ready to prepare your next project?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-offwhite/75">
          Tell us what you&apos;re working on and we&apos;ll help you identify the right service for your
          surface.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonAnchor href={company.primaryPhone.tel}>Call now</ButtonAnchor>
          <ButtonAnchor href={company.whatsappUrl} variant="secondary" external>
            WhatsApp us
          </ButtonAnchor>
          <ButtonLink to="/contact#quote" variant="secondary">
            Request a quote
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export function QuoteSection() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            light
            kicker="10 / Enquiry"
            title="Request a quote"
            body="Share the surface, location and service you need. We will respond using the contact details you provide."
          />
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export function GallerySection() {
  return (
    <section className="bg-graphite py-20 md:py-28">
      <div className="container-site">
        <SectionHeading light kicker="08 / Projects" title="Selected industrial surfaces" />
        <div className="mt-12">
          <Gallery />
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="border-t border-white/10 bg-charcoal py-20">
      <div className="container-site text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Let&apos;s prepare your next project</h2>
        <p className="mx-auto mt-4 max-w-2xl text-offwhite/70">
          Have a PEB structure, steel component, metal surface or stone project that needs professional
          surface treatment?
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonAnchor href={company.primaryPhone.tel}>Call GK Coating</ButtonAnchor>
          <ButtonAnchor href={company.whatsappUrl} variant="secondary" external>
            WhatsApp us
          </ButtonAnchor>
          <ButtonLink to="/contact#quote" variant="secondary">
            Request a quote
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
