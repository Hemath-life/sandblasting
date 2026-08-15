import { motion, useReducedMotion } from "framer-motion"
import { ease } from "../lib/cn"

type Props = {
  kicker?: string
  title: string
  body?: string
  light?: boolean
  align?: "left" | "center"
}

export function SectionHeading({ kicker, title, body, light, align = "left" }: Props) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {kicker ? (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${light ? "text-brand" : "text-brand-dark"}`}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight md:text-5xl ${light ? "text-white" : "text-graphite"}`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-offwhite/70" : "text-ink/70"}`}>
          {body}
        </p>
      ) : null}
    </motion.div>
  )
}
