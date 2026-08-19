import { Link } from "react-router-dom"

type Crumb = { label: string; to?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-site py-5 text-[11px] uppercase tracking-[0.18em] text-offwhite/55">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="text-metal-light">{item.label}</span>
            )}
            {index < items.length - 1 ? <span aria-hidden>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
