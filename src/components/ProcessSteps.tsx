import { motion, useReducedMotion } from "framer-motion"
import { processSteps } from "../data/projects"
import { ease } from "../lib/cn"

export function ProcessSteps() {
  const reduce = useReducedMotion()
  return (
    <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
      <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-metal to-transparent md:block" />
      {processSteps.map((step, index) => (
        <motion.li
          key={step.number}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease }}
          className="relative border border-black/10 bg-white p-6 md:border-0 md:bg-transparent md:p-0"
        >
          <div className="flex items-start gap-4 md:block">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-metal bg-offwhite font-extrabold text-graphite">
              {step.number}
            </span>
            <div>
              <h3 className="mt-0 text-xl font-extrabold uppercase tracking-wide text-graphite md:mt-6">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{step.body}</p>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
