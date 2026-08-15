import { useState, useRef, type MouseEvent } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, AnimatePresence } from "framer-motion"
import { ChevronDown, ShieldCheck, Flame, CheckCircle2, Rotate3d } from "lucide-react"
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
    image: images.hero3d,
    badge: "ISO 8501-1 Grade",
    stat: "120 PSI",
    statLabel: "Mobile Compressor",
  },
  {
    id: "metallizing",
    label: "Thermal Arc Spray",
    subtitle: "Zinc & Aluminum Molten Metal Shield",
    image: images.metallizing,
    badge: "BS EN ISO 14919",
    stat: "25+ Yrs",
    statLabel: "Cathodic Protection",
  },
  {
    id: "spray",
    label: "Airless Spray Painting",
    subtitle: "Epoxy & Polyurethane Multi-Coat Barrier",
    image: images.spray,
    badge: "C5-M High Durability",
    stat: "350+ µm",
    statLabel: "Controlled DFT",
  },
  {
    id: "temple",
    label: "Temple Stone Blasting",
    subtitle: "Non-Destructive Heritage Micro-Blasting",
    image: images.temple,
    badge: "Heritage Approved",
    stat: "100%",
    statLabel: "Original Stone Intact",
  },
]

export function Hero() {
  const reduce = useReducedMotion()
  const [activeService, setActiveService] = useState<VisualService>(VISUAL_SERVICES[0])
  const [is3dEnabled, setIs3dEnabled] = useState(true)

  // 3D Tilt calculations
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 })
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-16deg", "16deg"])
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !is3dEnabled || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section className="noise-overlay relative min-h-screen overflow-hidden bg-graphite pt-28 pb-16 lg:pt-32 lg:pb-24">
      {/* Background 3D Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[480px] w-[480px] rounded-full bg-metal/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-brand-dark/25 blur-[120px]" />

      {/* Cyber Industrial Perspective Grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(214,180,122,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(214,180,122,0.6) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      {!reduce && <GlowingSparks />}

      <div className="container-site relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-8 min-h-[calc(100vh-160px)]">
        
        {/* Left Column: Hero Content & Engineering Typography */}
        <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-6">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2.5 self-start rounded-full border border-metal/30 bg-metal/10 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-metal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-metal-light" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-metal-light sm:text-[11px]">
              {company.eyebrow}
            </span>
          </motion.div>

          {/* Main 3D Title */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="mt-5 text-4xl font-extrabold leading-[0.94] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            BUILT ON CLEAN
            <span className="block mt-1 bg-gradient-to-r from-white via-offwhite to-metal-light bg-clip-text text-transparent">
              SURFACES.
            </span>
          </motion.h1>

          {/* Tagline / Value Proposition */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="mt-4 font-serif text-2xl italic text-metal-light sm:text-3xl"
          >
            {company.supportingLine}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-offwhite/80 sm:text-base md:text-lg"
          >
            {company.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <ButtonLink to="/contact#quote" className="shadow-lg shadow-brand/25 hover:shadow-brand/40">
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

          {/* Trust Highlights Strip */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6"
          >
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">Sa 2.5 / 3</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-metal-light">ISO Standard Purity</p>
            </div>
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">100%</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-metal-light">Mobile Site Rig</p>
            </div>
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">25+ Yrs</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-metal-light">Corrosion Defense</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Showcase Stage */}
        <div className="flex flex-col items-center justify-center lg:col-span-6 xl:col-span-6">
          
          {/* Interactive Service Switcher Tabs */}
          <div className="mb-4 flex w-full max-w-lg items-center justify-between gap-1 rounded-xl border border-white/10 bg-charcoal/80 p-1.5 backdrop-blur-md">
            <div className="flex flex-1 flex-wrap gap-1">
              {VISUAL_SERVICES.map((s) => {
                const isActive = s.id === activeService.id
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveService(s)}
                    className={`relative rounded-lg px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-graphite font-bold"
                        : "text-offwhite/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeServiceTab"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-metal-light to-metal shadow-md"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{s.label}</span>
                  </button>
                )
              })}
            </div>
            
            {/* 3D Depth Toggle Indicator */}
            <button
              onClick={() => setIs3dEnabled((prev) => !prev)}
              title="Toggle interactive 3D perspective"
              className={`hidden sm:flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] uppercase font-bold tracking-wider transition-colors ${
                is3dEnabled ? "text-metal-light bg-metal/15 border border-metal/30" : "text-offwhite/40 border border-white/5"
              }`}
            >
              <Rotate3d className="h-3.5 w-3.5" />
              <span>3D {is3dEnabled ? "ON" : "OFF"}</span>
            </button>
          </div>

          {/* 3D Viewport Stage */}
          <div 
            className="perspective-1200 relative w-full max-w-lg cursor-grab active:cursor-grabbing"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
          >
            <motion.div
              style={
                reduce || !is3dEnabled
                  ? {}
                  : {
                      rotateX,
                      rotateY,
                      transformStyle: "preserve-3d",
                    }
              }
              animate={
                !reduce && !is3dEnabled
                  ? { y: [0, -8, 0] }
                  : {}
              }
              transition={
                !reduce && !is3dEnabled
                  ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  : undefined
              }
              className="preserve-3d relative rounded-2xl p-1 transition-shadow duration-300"
            >
              {/* Outer 3D Halo Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-metal/40 via-brand/40 to-metal-light/40 opacity-75 blur-xl transition duration-500 group-hover:opacity-100" />

              {/* Main 3D Card Structure */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-metal/30 bg-charcoal shadow-2xl shadow-black/90 sm:aspect-[16/11]">
                
                {/* Dynamic Surface Image Transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeService.image}
                      alt={activeService.subtitle}
                      className="h-full w-full object-cover object-center filter brightness-[0.98] contrast-[1.08] saturate-[1.05]"
                      fetchPriority="high"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Dark Vignette & Atmospheric Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-graphite/40 via-transparent to-graphite/40" />

                {/* 3D Laser Scanning Surface Line */}
                {!reduce && (
                  <div className="animate-laser pointer-events-none absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-metal-light to-transparent shadow-[0_0_15px_3px_rgba(214,180,122,0.8)]" />
                )}

                {/* Dynamic Glare / Specular Sheen across 3D Card */}
                {is3dEnabled && !reduce && (
                  <motion.div
                    style={{
                      left: glareX,
                      top: glareY,
                    }}
                    className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-white/20 via-metal-light/10 to-transparent blur-2xl"
                  />
                )}

                {/* Holographic HUD UI Overlays on Card */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                  
                  {/* Top Bar: Inspection Status Tag */}
                  <div className="flex items-center justify-between">
                    <div className="hero-glass-card inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-metal-light">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{activeService.badge}</span>
                    </div>

                    <div className="hero-glass-card rounded-lg px-2.5 py-1 text-right">
                      <span className="text-[9px] uppercase tracking-wider text-offwhite/60 block">Live Spec</span>
                      <span className="text-xs font-black text-white">{activeService.stat}</span>
                    </div>
                  </div>

                  {/* Bottom Bar: Active Service Info */}
                  <div className="hero-glass-card rounded-xl p-3.5 border border-white/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-white">
                          {activeService.label}
                        </p>
                        <p className="text-[11px] text-offwhite/80">
                          {activeService.subtitle}
                        </p>
                      </div>
                      <div className="hidden sm:block text-right">
                        <p className="text-[9px] uppercase tracking-wider text-metal-light">{activeService.statLabel}</p>
                        <p className="text-xs font-bold text-white flex items-center gap-1 justify-end">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Certified
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating 3D Depth Card 1: Sa 2.5 ISO Badge (Top-Right Floating 3D Layer) */}
              <motion.div
                style={is3dEnabled && !reduce ? { transform: "translateZ(45px)" } : {}}
                className="animate-float-slow absolute -top-5 -right-4 hidden sm:flex items-center gap-2.5 rounded-xl border border-metal/40 bg-charcoal/95 p-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-metal/20 text-metal-light">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-metal-light">100% White Metal</p>
                  <p className="text-xs font-extrabold text-white">Sa 2.5 / Sa 3 Blast Finish</p>
                </div>
              </motion.div>

              {/* Floating 3D Depth Card 2: 25 Yrs Warranty (Bottom-Left Floating 3D Layer) */}
              <motion.div
                style={is3dEnabled && !reduce ? { transform: "translateZ(55px)" } : {}}
                className="animate-float-reverse absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2.5 rounded-xl border border-brand/40 bg-charcoal/95 p-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/20 text-brand">
                  <Flame className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-metal-light">Anti-Corrosion Shield</p>
                  <p className="text-xs font-extrabold text-white">Zinc Metallizing + Epoxy</p>
                </div>
              </motion.div>

            </motion.div>

            {/* Sub-card Helper */}
            <p className="mt-3 text-center text-[11px] text-offwhite/45 hidden sm:block">
              ✦ Hover and move your mouse to explore the 3D surface depth
            </p>

          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#trust" className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-offwhite/50 hover:text-metal-light transition-colors">
          <span>Scroll to explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-metal-light" aria-hidden />
        </a>
      </div>
    </section>
  )
}

function GlowingSparks() {
  const sparks = useRef(
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: `${(i * 19) % 100}%`,
      bottom: `${(i * 13) % 45}%`,
      size: `${2 + (i % 4)}px`,
      tx: `${(i % 2 === 0 ? 1 : -1) * (20 + (i % 30))}px`,
      duration: `${4 + (i % 5)}s`,
      delay: `${(i * 0.45) % 4}s`,
    }))
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {sparks.current.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-gradient-to-t from-metal to-metal-light shadow-[0_0_8px_1px_rgba(214,180,122,0.8)]"
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
    "Vellore & TN Rig Service",
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
