import { Link } from "react-router-dom"
import { company, navLinks } from "../data/company"
import { services } from "../data/services"
import { Logo } from "./Navbar"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite text-offwhite">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-offwhite/70">
            {company.tagline}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-metal-light">
            {company.location}
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.24em] text-metal">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={service.path} className="text-sm text-offwhite/75 transition hover:text-brand">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.24em] text-metal">Company</h2>
          <ul className="mt-5 space-y-3">
            {navLinks
              .filter((link) => ["/", "/about", "/projects", "/contact"].includes(link.to))
              .map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-offwhite/75 transition hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.24em] text-metal">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-offwhite/80">
            {company.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={phone.tel} className="hover:text-brand">
                  {phone.label}
                </a>
              </li>
            ))}
          </ul>
          <address className="mt-5 text-sm not-italic leading-relaxed text-offwhite/65">
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            Thiruvalam,
            <br />
            Vellore District – 632515.
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-[12px] text-offwhite/50 sm:flex-row sm:justify-between">
          <p>© 2026 GK Coating. All rights reserved.</p>
          <p>GSTIN {company.gstin}</p>
        </div>
      </div>
    </footer>
  )
}
