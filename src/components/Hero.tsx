import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion"
import { ChevronDown, ShieldCheck, Flame, Truck } from "lucide-react"
import { company } from "../data/company"
import { images } from "../data/images"
import { ButtonAnchor, ButtonLink } from "./Buttons"
import { ease } from "../lib/cn"

type VisualService = {
  id: "sandblasting" | "metallizing" | "spray" | "temple"
  label: string
  subtitle: string
  image: string
  badge: string
  stat: string
  statLabel: string
}

const VISUAL_SERVICES: VisualService[] = [
  {
    id: "sandblasting",
    label: "Sand Blasting",
    subtitle: "High-Pressure Abrasive Blast (Sa 2.5 / Sa 3)",
    image: images.hero,
    badge: "ISO 8501-1 Grade",
    stat: "120 PSI",
    statLabel: "Mobile Compressor",
  },
  {
    id: "metallizing",
    label: "Thermal Arc Spray",
    subtitle: "Molten Zinc & Aluminum Shield",
    image: images.metallizing,
    badge: "BS EN ISO 14919",
    stat: "25+ Yrs",
    statLabel: "Cathodic Protection",
  },
  {
    id: "spray",
    label: "Airless Spray Painting",
    subtitle: "Epoxy & Polyurethane Barrier",
    image: images.spray,
    badge: "C5-M Durability",
    stat: "350+ µm",
    statLabel: "Controlled DFT",
  },
  {
    id: "temple",
    label: "Temple Stone Blasting",
    subtitle: "Non-Destructive Micro-Blasting",
    image: images.temple,
    badge: "Heritage Safe",
    stat: "100%",
    statLabel: "Original Stone Intact",
  },
]

export function Hero() {
  const reduce = useReducedMotion()
  const [activeService, setActiveService] = useState<VisualService>(VISUAL_SERVICES[0])
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Cinematic Parallax depth
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1])

  return (
    <section 
      ref={heroRef} 
      className="noise-overlay relative min-h-[92vh] md:min-h-screen w-full overflow-hidden bg-graphite flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* 🌟 Massive Full-Bleed Real Industrial Background Image */}
      <motion.div 
        style={{ y: imageY, scale: imageScale }} 
        className="absolute inset-0 h-[115%] w-full"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeService.id}
            src={activeService.image}
            alt={activeService.subtitle}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full object-cover object-[center_35%] filter brightness-[0.92] contrast-[1.06]"
            fetchPriority="high"
          />
        </AnimatePresence>
      </motion.div>

      {/* Cinematic Directional Lighting & Readability Gradients */}
      {/* Left side text darkening gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/95 via-graphite/85 via-45% to-graphite/30 lg:to-transparent" />
      {/* Bottom & Top soft vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/60" />
      {/* Radial warmth over the blasting area */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-metal/10 blur-[130px] opacity-70" />

      {!reduce && <GlowingSparks />}

      {/* Main Container */}
      <div className="container-site relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Core Headline, Philosophy & CTAs */}
          <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-7">
            
            {/* Eyebrow Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2.5 self-start rounded-full border border-metal/40 bg-graphite/80 px-3.5 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-metal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-metal-light" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-metal-light sm:text-[11px]">
                {company.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease }}
              className="mt-4 text-4xl font-black leading-[0.94] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
            >
              BUILT ON CLEAN
              <span className="block mt-1 bg-gradient-to-r from-white via-offwhite to-metal-light bg-clip-text text-transparent">
                SURFACES.
              </span>
            </motion.h1>

            {/* Italian Tagline */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease }}
              className="mt-3 font-serif text-2xl italic text-metal-light sm:text-3xl md:text-4xl"
            >
              {company.supportingLine}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-offwhite/85 sm:text-base md:text-lg"
            >
              {company.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26, ease }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <ButtonLink to="/contact#quote" className="shadow-xl shadow-brand/30 hover:shadow-brand/50">
                Get an Instant Quote →
              </ButtonLink>
              <ButtonLink to="/services" variant="secondary">
                Explore Services
              </ButtonLink>
              <ButtonAnchor href={company.primaryPhone.tel} variant="secondary">
                Call Now
              </ButtonAnchor>
              <ButtonAnchor href={company.whatsappUrl} variant="secondary" external>
                WhatsApp Us
              </ButtonAnchor>
            </motion.div>

            {/* Local Location & Contact Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-offwhite/80 border-t border-white/10 pt-4"
            >
              <span className="flex items-center gap-1.5 font-semibold text-metal-light">
                <Truck className="h-4 w-4" /> 24/7 Mobile Rig: Vellore • Ranipet SIPCOT • Thiruvalam
              </span>
              <span className="text-offwhite/50">•</span>
              <span>ISO Sa 2.5 / Sa 3 Certified</span>
            </motion.div>

          </div>

          {/* Right Column: Interactive 3D Floating Glass Specification Cards */}
          <div className="flex flex-col items-center lg:items-end justify-center lg:col-span-5 xl:col-span-5 space-y-4">
            
            {/* Interactive Capability Switcher */}
            <div className="flex w-full max-w-sm flex-wrap gap-1 rounded-xl border border-white/15 bg-charcoal/90 p-1.5 backdrop-blur-xl shadow-2xl">
              {VISUAL_SERVICES.map((s) => {
                const isActive = s.id === activeService.id
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveService(s)}
                    className={`relative flex-1 min-w-[120px] rounded-lg px-2.5 py-1.5 text-center text-[11px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-graphite font-bold"
                        : "text-offwhite/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="heroActiveService"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-metal-light to-metal shadow-md"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{s.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Floating Glass Spec Card 1: Sa 2.5 White Metal Finish */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-sm rounded-2xl border border-metal/30 bg-graphite/85 p-4.5 backdrop-blur-xl shadow-2xl shadow-black/80 hover:border-metal/60 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-metal/20 text-metal-light">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-metal-light">100% White Metal</p>
                    <p className="text-sm font-extrabold text-white">Sa 2.5 / Sa 3 Blast Purity</p>
                  </div>
                </div>
                <span className="rounded-md bg-emerald-500/20 px-2 py-1 text-[10px] font-bold text-emerald-400">
                  ISO 8501-1
                </span>
              </div>
            </motion.div>

            {/* Floating Glass Spec Card 2: 25+ Yrs Anti-Corrosion Shield */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-sm rounded-2xl border border-brand/40 bg-graphite/85 p-4.5 backdrop-blur-xl shadow-2xl shadow-black/80 hover:border-brand/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand">
                    <Flame className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-metal-light">Anti-Corrosion Shield</p>
                    <p className="text-sm font-extrabold text-white">Zinc Metallizing + Epoxy</p>
                  </div>
                </div>
                <span className="rounded-md bg-brand/25 px-2 py-1 text-[10px] font-bold text-metal-light">
                  25+ Yrs
                </span>
              </div>
            </motion.div>

            {/* Floating Glass Spec Card 3: Active Service Details */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-sm rounded-2xl border border-white/15 bg-graphite/85 p-4 backdrop-blur-xl shadow-2xl shadow-black/80"
            >
              <div className="flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white uppercase tracking-wider">{activeService.label}</p>
                  <p className="text-[11px] text-offwhite/70">{activeService.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-metal-light block">{activeService.statLabel}</span>
                  <span className="text-sm font-extrabold text-white">{activeService.stat}</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block z-10">
        <a href="#trust" className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-offwhite/60 hover:text-metal-light transition-colors">
          <span>Scroll to explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-metal-light" aria-hidden />
        </a>
      </div>
    </section>
  )
}

function GlowingSparks() {
  const sparks = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${(i * 17) % 100}%`,
      bottom: `${(i * 11) % 40}%`,
      size: `${2 + (i % 3)}px`,
      duration: `${5 + (i % 4)}s`,
      delay: `${(i * 0.5) % 4}s`,
    }))
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {sparks.current.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-metal-light shadow-[0_0_8px_1px_rgba(214,180,122,0.8)] opacity-60"
          style={{
            left: s.left,
            bottom: s.bottom,
            width: s.size,
            height: s.size,
            animation: `drift ${s.duration} ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  )
}

export function TrustStrip() {
  const items = [
    "Sand Blasting (Sa 2.5 / 3)",
    "Thermal Arc Metallizing",
    "Airless Spray Painting",
    "Temple Stone Blasting",
    "PEB Structural Steel",
    "Vellore & Ranipet Mobile Rig",
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
