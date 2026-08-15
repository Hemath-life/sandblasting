import { useEffect, useId, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, Phone, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { company, navLinks } from "../data/company"
import { cn } from "../lib/cn"

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 min-h-11" aria-label="GK Coatings home">
      <span
        className={cn(
          "grid h-10 w-10 place-items-center border text-[11px] font-extrabold tracking-[0.18em]",
          inverted ? "border-metal/70 bg-graphite text-offwhite" : "border-metal bg-graphite text-offwhite",
        )}
      >
        GK
      </span>
      <span className="leading-none">
        <span className="block text-[13px] font-extrabold tracking-[0.22em]">GK COATINGS</span>
        <span className="mt-1 hidden text-[9px] uppercase tracking-[0.28em] text-steel sm:block">
          Surface · Coatings
        </span>
      </span>
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reduce = useReducedMotion()
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "bg-graphite/92 backdrop-blur-md border-b border-white/10" : "bg-transparent",
      )}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors",
                  isActive ? "text-brand" : "text-offwhite/80 hover:text-white",
                )
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={company.primaryPhone.tel}
            className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-offwhite lg:hidden"
            aria-label={`Call ${company.primaryPhone.label}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
          <Link
            to="/contact#quote"
            className="hidden min-h-11 items-center bg-metal px-5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-graphite transition hover:bg-metal-light lg:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-graphite lg:hidden"
          >
            <nav className="container-site flex flex-col gap-1 py-6" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "min-h-11 py-3 text-sm font-semibold uppercase tracking-[0.2em]",
                      isActive ? "text-brand" : "text-offwhite",
                    )
                  }
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact#quote"
                className="mt-4 inline-flex min-h-12 items-center justify-center bg-metal text-[12px] font-extrabold uppercase tracking-[0.18em] text-graphite"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
