import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { projects } from "../data/projects"
import { ProjectCard } from "./ProjectCard"

export function Gallery() {
  const [active, setActive] = useState<string | null>(null)
  const index = projects.findIndex((p) => p.id === active)
  const current = index >= 0 ? projects[index] : null

  useEffect(() => {
    if (!current) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null)
      if (event.key === "ArrowRight") setActive(projects[(index + 1) % projects.length].id)
      if (event.key === "ArrowLeft")
        setActive(projects[(index - 1 + projects.length) % projects.length].id)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [current, index])

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {projects.map((project, i) => (
          <div key={project.id} className={`mb-4 break-inside-avoid ${i % 3 === 1 ? "sm:mt-8" : ""}`}>
            <div className={i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}>
              <ProjectCard project={project} onOpen={setActive} />
            </div>
          </div>
        ))}
      </div>
      {current ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite/92 p-4" role="dialog" aria-modal="true" aria-label={current.title}>
          <button
            type="button"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center border border-white/20"
            onClick={() => setActive(null)}
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="absolute left-3 grid h-11 w-11 place-items-center border border-white/20 md:left-8"
            onClick={() => setActive(projects[(index - 1 + projects.length) % projects.length].id)}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <figure className="max-h-[82vh] max-w-5xl">
            <img src={current.image} alt={current.title} className="img-grade max-h-[70vh] w-full object-contain" />
            <figcaption className="mt-4 text-center">
              <p className="text-[11px] uppercase tracking-[0.22em] text-metal-light">{current.category}</p>
              <p className="mt-1 text-xl font-bold">{current.title}</p>
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-3 grid h-11 w-11 place-items-center border border-white/20 md:right-8"
            onClick={() => setActive(projects[(index + 1) % projects.length].id)}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      ) : null}
    </>
  )
}
