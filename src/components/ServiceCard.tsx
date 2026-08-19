import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { Service } from "../data/services"

type Props = {
  service: Service
}

export function ServiceCard({ service }: Props) {
  return (
    <Link
      to={service.path}
      className="group relative block min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-charcoal transition duration-500 hover:-translate-y-1.5 hover:border-metal"
    >
      <img
        src={service.image}
        alt={`${service.title} service photography`}
        className="img-grade absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/55 to-graphite/20 transition group-hover:via-graphite/45" />
      <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7">
        <p className="text-[11px] uppercase tracking-[0.28em] text-metal-light">{service.number} / Service</p>
        <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-wide">{service.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-offwhite/75">{service.short}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.applications.slice(0, 3).map((item) => (
            <li key={item} className="border border-white/15 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-offwhite/80">
              {item}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-metal-light">
          View Service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  )
}
