import { ArrowUpRight, MapPin, Truck, ShieldCheck, CheckCircle2 } from "lucide-react"
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
            GK Coating provides professional sand blasting, spray painting, temple stone blasting and
            metallizing in Thiruvalam, Vellore, Tamil Nadu — for steel structures, PEB structures, metal
            components and other industrial surfaces.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75">
            Proper preparation can help remove rust, old coating, mill scale, dirt, oxidation and
            surface contaminants, and prepares surfaces for subsequent protective coating operations.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {company.applications.map((item) => (
              <li
                key={item}
                className="border border-black/10 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-dark"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7 lg:-mt-10">
          <div className="absolute -left-6 top-8 hidden h-24 w-px bg-metal lg:block" />
          <div className="relative overflow-hidden rounded-2xl border border-metal/20 shadow-2xl shadow-black/30">
            <img
              src={images.intro}
              alt="Engineering team inspecting structural PEB steel fabrication and blasting in Tamil Nadu yard"
              className="h-[460px] w-full object-cover object-center filter brightness-[0.98] contrast-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-charcoal/85 p-3.5 backdrop-blur-md">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Tamil Nadu Fabrication & Blasting Yard
                </p>
                <p className="text-[11px] text-offwhite/75">
                  PEB Structural Steel • Heavy Beams • ISO Sa 2.5 Inspection
                </p>
              </div>
              <span className="hidden sm:inline-flex rounded-full bg-brand/20 border border-brand/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Active Rig
              </span>
            </div>
          </div>
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
        alt="Industrial buildings and steel structures in an Indian fabrication setting"
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
          kicker="05 / Process"
          title="Our process"
          body="A clear path from surface condition to finished preparation."
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
        <SectionHeading
          kicker="06 / Applications"
          title="Where our services fit"
          body="Sand blasting and coating work for PEB, structural steel, fabrication, machinery, metal components and temple stone."
        />
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
    "Blasting / preparation",
    "Clean / profiled surface",
    "Protective coating",
    "Finished result",
  ]
  return (
    <section className="bg-graphite py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            light
            kicker="07 / Why it matters"
            title="Why surface preparation matters"
            body="The quality of a coating system starts with the condition of the surface beneath it."
          />
          <p className="mt-5 max-w-xl text-offwhite/70">
            GK Coating is not only a painting service. Work is organised around surface preparation plus
            protective coating — sand blasting in Vellore and Thiruvalam, then the specified coating stage.
          </p>
          <img
            src={images.blastingPpe}
            alt="Industrial crew in helmets at an Indian construction site"
            className="img-grade mt-8 h-64 w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        <ol className="border border-white/10 bg-charcoal p-8 lg:col-span-7">
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
            and surrounding industrial areas. Proprietor {company.proprietor}.
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
            {phone.label}
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

export function LocalServiceAreasSection() {
  const areas = [
    {
      name: "Thiruvalam Facility & Yard",
      badge: "Main Yard & Rig Hub",
      distance: "Local Center",
      desc: "Central sand blasting yard and spray paint facility on Mariyamman Koil St, Kugainallur Post. Equipped for heavy structural steel beams, truck chassis, and off-site blasting.",
      services: ["In-house Sand Blasting", "Airless Spray Painting", "Thermal Arc Metallizing"],
    },
    {
      name: "Ranipet & SIPCOT Industrial Hub",
      badge: "Heavy Engineering Corridor",
      distance: "10-15 Mins",
      desc: "Dedicated mobile rig service for SIPCOT Phase 1, Phase 2, Phase 3, and surrounding chemical, foundry, boiler, and heavy structural steel fabrication facilities.",
      services: ["On-Site Mobile Rig", "Boiler & Vessel Blasting", "PEB Structure Coating"],
    },
    {
      name: "Vellore, Katpadi & Bagayam",
      badge: "Commercial & Industrial Hub",
      distance: "15-20 Mins",
      desc: "Rapid deployment for PEB warehouses, institutional campus steel, industrial machinery, storage tanks, and historical heritage masonry across the Vellore urban belt.",
      services: ["PEB Warehouse Blasting", "Tank & Pipe Internal Blast", "Machinery Refurbishment"],
    },
    {
      name: "Walajapet, Arcot, Ambur & Gudiyatham",
      badge: "Extended Industrial District",
      distance: "Same-Day Deployment",
      desc: "Surface preparation and anti-corrosion metallizing for industrial foundries, leather machinery frames, crane gantries, and architectural stone restoration.",
      services: ["Foundry Casting Cleaning", "Crane Gantry Blasting", "Temple Stone Micro-Blasting"],
    },
  ]

  return (
    <section className="bg-graphite border-t border-white/10 py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-metal-light">
              09 / Local Industrial Reach
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Sand Blasting &amp; Coating in <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-offwhite to-metal-light bg-clip-text text-transparent">
                Vellore, Ranipet &amp; Thiruvalam
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-metal/30 bg-charcoal/80 px-4 py-3 backdrop-blur-md">
            <Truck className="h-6 w-6 text-metal-light shrink-0" />
            <div>
              <p className="text-xs font-extrabold text-white">24/7 Mobile Blasting Rig</p>
              <p className="text-[11px] text-offwhite/70">On-site service throughout Tamil Nadu</p>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base text-offwhite/75 md:text-lg">
          Whether you require high-pressure abrasive blasting at our Thiruvalam yard or a fully equipped mobile
          compressor rig dispatched directly to your worksite in Ranipet SIPCOT or Vellore, GK Coating delivers
          certified ISO Sa 2.5 surface purity and long-lasting protective finishes.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <div
              key={a.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-charcoal/90 p-6 transition-all duration-300 hover:border-metal/40 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-md bg-metal/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-metal-light">
                    {a.badge}
                  </span>
                  <span className="text-[10px] text-offwhite/50">{a.distance}</span>
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-white flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-metal-light shrink-0" />
                  {a.name}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-offwhite/70">
                  {a.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-[10px] uppercase font-bold tracking-wider text-metal-light mb-2">Key Services:</p>
                <ul className="space-y-1.5">
                  {a.services.map((s) => (
                    <li key={s} className="flex items-center gap-1.5 text-[11px] text-offwhite/85">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Local Callout Box */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-metal/30 bg-gradient-to-r from-charcoal via-charcoal/90 to-metal/10 p-6 sm:flex-row">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-metal/20 text-metal-light">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white">Need emergency or scheduled on-site sand blasting?</p>
              <p className="text-xs text-offwhite/70">Immediate quotes and site visits available across Vellore &amp; Ranipet districts.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonAnchor href={company.primaryPhone.tel}>Call: {company.primaryPhone.display}</ButtonAnchor>
            <ButtonAnchor href={company.whatsappUrl} variant="secondary" external>
              WhatsApp Us
            </ButtonAnchor>
          </div>
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
        <SectionHeading
          light
          kicker="08 / Projects"
          title="Project gallery"
          body="Sand blasting, rust removal, spray painting, metallizing and temple stone work — representative industrial surfaces."
        />
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
