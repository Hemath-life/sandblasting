import { images } from "./images"

export type ServiceId =
  | "sand-blasting"
  | "spray-painting"
  | "temple-stone-blasting"
  | "metallizing"

export type Service = {
  id: ServiceId
  number: string
  title: string
  path: string
  short: string
  description: string
  applications: string[]
  image: string
  heroSubtitle: string
}

export const services: Service[] = [
  {
    id: "sand-blasting",
    number: "01",
    title: "Sand Blasting",
    path: "/services/sand-blasting",
    short: "Professional abrasive blasting for cleaning and preparing metal surfaces before coating.",
    description:
      "Abrasive blasting is used to remove rust, old coating, mill scale and surface contaminants from suitable metal surfaces, creating a cleaner profile for the next coating stage.",
    applications: [
      "PEB structures",
      "Structural steel",
      "Fabricated metal",
      "Industrial components",
      "Machinery",
    ],
    image: images.blastingPpe,
    heroSubtitle: "Prepare the surface. Improve the foundation for the next coating stage.",
  },
  {
    id: "spray-painting",
    number: "02",
    title: "Spray Painting",
    path: "/services/spray-painting",
    short: "Professional spray painting for industrial structures and prepared metal surfaces.",
    description:
      "Industrial spray painting is applied to prepared steel and metal surfaces to provide a uniform protective or specified finish coat as part of a broader coating sequence.",
    applications: [
      "Steel structures",
      "Fabricated components",
      "PEB structures",
      "Industrial surfaces",
    ],
    image: images.spray,
    heroSubtitle: "Protective and specified finishes for prepared industrial surfaces.",
  },
  {
    id: "temple-stone-blasting",
    number: "03",
    title: "Temple Stone Blasting",
    path: "/services/temple-stone-blasting",
    short: "Controlled surface treatment and cleaning for suitable temple stone and architectural surfaces.",
    description:
      "Controlled blasting and surface treatment methods can be used to clean and prepare suitable stone and architectural surfaces, including temple applications, with care for the material.",
    applications: [
      "Temple stone",
      "Architectural stone",
      "Restoration preparation",
      "Surface cleaning",
    ],
    image: images.temple,
    heroSubtitle: "Respectful, controlled treatment for suitable stone surfaces.",
  },
  {
    id: "metallizing",
    number: "04",
    title: "Metallizing",
    path: "/services/metallizing",
    short: "Protective metallic coating solutions for steel and industrial surfaces.",
    description:
      "Metallizing applies a metallic coating to a suitably prepared steel surface as part of a corrosion-protection system. Performance depends on surface condition, specification and site requirements.",
    applications: [
      "Structural steel",
      "Fabricated steel",
      "Industrial components",
      "Corrosion protection systems",
    ],
    image: images.metallizing,
    heroSubtitle: "Metallic coating systems for suitably prepared steel surfaces.",
  },
]

export function getService(id: ServiceId): Service {
  const found = services.find((item) => item.id === id)
  if (!found) throw new Error(`Unknown service: ${id}`)
  return found
}
