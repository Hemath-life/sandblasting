import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Flame,
  Truck,
  Layers,
  Pause,
  Play,
} from "lucide-react"
import { company } from "../data/company"
import { images } from "../data/images"
import { ButtonAnchor, ButtonLink } from "./Buttons"
import { ease } from "../lib/cn"

export type CarouselSlide = {
  id: string
  label: string
  title: string
  subtitle: string
  image: string
  badge: string
  stat: string
  statLabel: string
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: "sandblasting",
    label: "Sand Blasting",
    title: "High-Pressure Abrasive Blasting",
    subtitle: "ISO Sa 2.5 / Sa 3 White Metal Surface Preparation for Steel & PEB",
    image: images.hero,
    badge: "ISO 8501-1 Grade",
    stat: "120 PSI",
    statLabel: "Mobile Compressor Rig",
  },
  {
    id: "metallizing",
    label: "Arc Metallizing",
    title: "Thermal Arc Spray Metallizing",
    subtitle: "Twin-Wire Molten Zinc & Aluminum Cathodic Corrosion Defense",
    image: images.metallizing,
    badge: "BS EN ISO 14919",
    stat: "25+ Yrs",
    statLabel: "Cathodic Protection",
  },
  {
    id: "spray",
    label: "Spray Painting",
    title: "Airless Industrial Spray Painting",
    subtitle: "High-Build Epoxy Primers & Polyurethane Multi-Coat Barrier",
    image: images.spray,
    badge: "C5-M Heavy Duty",
    stat: "350+ µm",
    statLabel: "Controlled Dry Film",
  },
  {
    id: "temple",
    label: "Temple Blasting",
    title: "Temple Stone Heritage Restoration",
    subtitle: "Gentle, Non-Destructive Micro-Blasting for Ancient Granite Masonry",
    image: images.temple,
    badge: "Heritage Safe",
    stat: "100%",
    statLabel: "Original Carvings Intact",
  },
  {
    id: "peb",
    label: "PEB Steel Structures",
    title: "Structural PEB & Steel Fabrication",
    subtitle: "Complete Surface Treatment for Heavy Girders, Beams & Warehouses",
    image: images.peb,
    badge: "Tamil Nadu Yard",
    stat: "500+ Tons",
    statLabel: "Monthly Processing",
  },
]

const SLIDE_DURATION = 6000 // 6 seconds per slide

export function Hero() {
  const reduce = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const heroRef = useRef<HTMLElement>(null)

  const activeSlide = CAROUSEL_SLIDES[currentIndex]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length)
  }, [])

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || reduce) return
    const timer = setInterval(() => {
      nextSlide()
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [isPlaying, reduce, nextSlide, currentIndex])

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08])

  return (
    <section
      ref={heroRef}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className="noise-overlay relative min-h-[92vh] md:min-h-screen w-full overflow-hidden bg-graphite flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* 🖼️ Big Full-Bleed Background Carousel Images */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 h-[115%] w-full"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="h-full w-full object-cover object-[center_35%] filter brightness-[1.0] contrast-[1.04] saturate-[1.05]"
              fetchPriority="high"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Subtle Directional Gradients for Image Clarity & Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/88 via-graphite/45 via-40% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-graphite/35" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-metal/10 blur-[140px] opacity-50" />

      {!reduce && <GlowingSparks />}

      {/* Carousel Navigation Arrows (Floating on Sides on Desktop) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-charcoal/70 text-white backdrop-blur-md transition-all hover:bg-metal hover:text-graphite hover:border-metal hover:scale-110 active:scale-95 shadow-xl"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-charcoal/70 text-white backdrop-blur-md transition-all hover:bg-metal hover:text-graphite hover:border-metal hover:scale-110 active:scale-95 shadow-xl"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Main Container Content */}
      <div className="container-site relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Bold Headline, Philosophy & Action Buttons */}
          <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-7">
            
            {/* Eyebrow Pill */}
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

            {/* Supporting Tagline */}
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

            {/* Local Coverage Bar */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-offwhite/80 border-t border-white/10 pt-4"
            >
              <span className="flex items-center gap-1.5 font-semibold text-metal-light">
                <Truck className="h-4 w-4 shrink-0" /> 24/7 Mobile Rig: All Over Tamil Nadu &amp; South India
              </span>
              <span className="text-offwhite/50">•</span>
              <span>ISO Sa 2.5 / Sa 3 Certified</span>
            </motion.div>

          </div>

          {/* Right Column: Interactive Slide Indicator & Live Spec Cards */}
          <div className="flex flex-col items-center lg:items-end justify-center lg:col-span-5 xl:col-span-5 space-y-4">
            
            {/* Carousel Tabs with Progress Animation */}
            <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-charcoal/90 p-2 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between px-2 pb-2 text-[10px] uppercase font-bold tracking-wider text-offwhite/60">
                <span className="flex items-center gap-1 text-metal-light">
                  <Layers className="h-3.5 w-3.5" /> Capabilities ({currentIndex + 1}/{CAROUSEL_SLIDES.length})
                </span>
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  <span>{isPlaying ? "Auto" : "Paused"}</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-1">
                {CAROUSEL_SLIDES.map((s, idx) => {
                  const isActive = idx === currentIndex
                  return (
                    <button
                      key={s.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative flex flex-col items-center justify-center rounded-lg py-2 px-1 text-center transition-all ${
                        isActive
                          ? "bg-metal text-graphite font-bold"
                          : "text-offwhite/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="text-[10px] font-mono leading-none">0{idx + 1}</span>
                      <span className="text-[9px] truncate max-w-[55px] mt-0.5">{s.label.split(" ")[0]}</span>

                      {/* Active Progress Bar */}
                      {isActive && isPlaying && !reduce && (
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                          className="absolute bottom-0 left-0 h-[2px] bg-graphite rounded-full"
                        />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Dynamic Live Spec Card that updates with active slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-sm rounded-2xl border border-metal/35 bg-graphite/90 p-5 backdrop-blur-xl shadow-2xl shadow-black/85"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-metal/20 text-metal-light">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-metal-light">
                        {activeSlide.badge}
                      </p>
                      <p className="text-sm font-extrabold text-white">
                        {activeSlide.title}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-offwhite/75">
                  {activeSlide.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-metal-light block">
                      {activeSlide.statLabel}
                    </span>
                    <span className="text-sm font-black text-white">{activeSlide.stat}</span>
                  </div>
                  <ButtonLink to="/services" variant="secondary" className="!px-3 !py-1 text-xs">
                    Learn More →
                  </ButtonLink>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Guarantee Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-sm rounded-2xl border border-brand/40 bg-graphite/85 p-3.5 backdrop-blur-xl shadow-xl shadow-black/70 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/20 text-brand">
                  <Flame className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-metal-light">Certified Warranty</p>
                  <p className="text-xs font-bold text-white">25+ Yrs Anti-Corrosion Protection</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Verified
              </span>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block z-10">
        <a
          href="#trust"
          className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-offwhite/60 hover:text-metal-light transition-colors"
        >
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
