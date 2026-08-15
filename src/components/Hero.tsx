import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { company } from "../data/company"
import { images } from "../data/images"
import { ButtonAnchor, ButtonLink } from "./Buttons"
import { ease } from "../lib/cn"

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])

  return (
    <section ref={ref} className="noise-overlay relative min-h-[75vh] overflow-hidden md:min-h-screen">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={images.hero}
          alt="Operator sandblasting industrial steel beam removing rust and surface contaminants"
          className="img-grade h-[120%] w-full object-cover object-[center_35%]"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/78 to-graphite/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
      {!reduce ? <Dust /> : null}
      <div className="container-site relative flex min-h-[75vh] flex-col justify-end pb-20 pt-32 md:min-h-screen md:justify-center md:pb-0">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-metal-light"
        >
          {company.eyebrow}
        </motion.p>
        <p className="mt-3 text-sm font-extrabold tracking-[0.28em] text-white">GK COATING</p>
        <p className="mt-2 max-w-xl text-[11px] uppercase tracking-[0.18em] text-offwhite/70">
          Sand blasting · Spray painting · Temple stone blasting · Metallizing
        </p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl"
        >
          BUILT ON CLEAN
          <br />
          SURFACES.
        </motion.h1>
        <p className="mt-5 font-serif text-2xl italic text-metal-light md:text-3xl">{company.supportingLine}</p>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-offwhite/80 md:text-lg"
        >
          {company.description}
        </motion.p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink to="/contact#quote">Get a Quote →</ButtonLink>
          <ButtonLink to="/services" variant="secondary">
            Explore Services
          </ButtonLink>
          <ButtonAnchor href={company.primaryPhone.tel} variant="secondary">
            Call now
          </ButtonAnchor>
          <ButtonAnchor href={company.whatsappUrl} variant="secondary" external>
            WhatsApp us
          </ButtonAnchor>
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.34em] text-offwhite/55">PEB • Steel • Metal • Stone</p>
        <p className="mt-3 text-sm text-offwhite/80">{company.location}</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {company.phones.map((phone) => (
            <a key={phone.tel} href={phone.tel} className="font-semibold text-metal-light hover:text-brand">
              {phone.label}
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <a href="#trust" className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-offwhite/60">
          Scroll
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
        </a>
      </div>
    </section>
  )
}

function Dust() {
  const particles = useRef(Array.from({ length: 18 }, (_, i) => i))
  return (
    <div className="dust" aria-hidden>
      {particles.current.map((i) => (
        <span
          key={i}
          style={{
            left: `${(i * 17) % 100}%`,
            bottom: `${(i * 11) % 40}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${12 + (i % 6)}s`,
          }}
        />
      ))}
    </div>
  )
}

export function TrustStrip() {
  const items = [
    "Sand Blasting",
    "Spray Painting",
    "Metallizing",
    "Temple Stone Blasting",
    "PEB Structures",
    "Steel Surfaces",
  ]
  return (
    <div id="trust" className="border-y border-white/10 bg-charcoal">
      <ul className="container-site grid grid-cols-2 divide-y divide-white/10 md:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-y-0">
        {items.map((item) => (
          <li
            key={item}
            className="flex min-h-16 items-center justify-center px-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-metal-light"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PageHero({
  kicker,
  title,
  body,
  image,
}: {
  kicker: string
  title: string
  body: string
  image: string
}) {
  return (
    <section className="relative min-h-[52vh] overflow-hidden pt-24 md:min-h-[62vh]">
      <img src={image} alt="" className="img-grade absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/75 to-graphite/30" />
      <div className="container-site relative flex min-h-[52vh] flex-col justify-end pb-14 md:min-h-[62vh]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-metal-light">{kicker}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base text-offwhite/75 md:text-lg">{body}</p>
      </div>
    </section>
  )
}
