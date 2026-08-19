import { ArrowUpRight } from "lucide-react"
import type { Project } from "../data/projects"

type Props = {
  project: Project
  onOpen: (id: string) => void
}

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project.id)}
      className="group relative block h-full w-full overflow-hidden rounded-2xl text-left"
      aria-label={`Open ${project.title} gallery image`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="img-grade absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/10 to-transparent opacity-80 transition group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-metal-light">{project.category}</p>
          <h3 className="mt-1 text-lg font-bold">{project.title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-metal-light" aria-hidden />
      </div>
    </button>
  )
}
