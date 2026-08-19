import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "../lib/cn"

type ButtonProps = {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
}

export function ButtonLink({
  to,
  children,
  className,
  variant = "primary",
}: ButtonProps & { to: string }) {
  const styles = variants[variant]
  if (to.startsWith("http") || to.startsWith("tel:") || to.startsWith("mailto:")) {
    return (
      <a href={to} className={cn(styles, className)}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cn(styles, className)}>
      {children}
    </Link>
  )
}

export function ButtonAnchor({
  href,
  children,
  className,
  variant = "primary",
  external,
}: ButtonProps & { href: string; external?: boolean }) {
  return (
    <a
      href={href}
      className={cn(variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

const variants = {
  primary:
    "inline-flex min-h-12 items-center justify-center gap-2 bg-metal px-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-graphite transition hover:bg-metal-light",
  secondary:
    "inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 bg-transparent px-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-offwhite transition hover:border-metal hover:text-metal-light",
  ghost:
    "inline-flex min-h-12 items-center justify-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand transition hover:text-metal-light",
}
