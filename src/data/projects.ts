import { images } from "./images"

export type Project = {
  id: string
  title: string
  category: string
  image: string
}

export const projects: Project[] = [
  { id: "peb-steel", title: "PEB Steel Structure", category: "PEB / Steel", image: images.peb },
  { id: "structural", title: "Structural Steel Blasting", category: "Sand Blasting", image: images.blastingWide },
  { id: "rust", title: "Rust Removal", category: "Surface Preparation", image: images.rust },
  { id: "spray", title: "Industrial Spray Painting", category: "Spray Painting", image: images.spray },
  { id: "prep", title: "Metal Surface Preparation", category: "Sand Blasting", image: images.blasting },
  { id: "metallizing", title: "Metallizing", category: "Protective Coating", image: images.metallizing },
  { id: "temple", title: "Temple Stone Blasting", category: "Stone", image: images.temple },
  { id: "finished", title: "Finished Steel Structure", category: "Completed Work", image: images.steelWarehouse },
]

export const applications = [
  {
    title: "PEB Buildings",
    description: "Large pre-engineered building structures.",
    image: images.peb,
  },
  {
    title: "Structural Steel",
    description: "Beams, columns and fabricated structural components.",
    image: images.steelFrame,
  },
  {
    title: "Industrial Fabrication",
    description: "Prepared surfaces for fabricated metal assemblies.",
    image: images.fabrication,
  },
  {
    title: "Machinery & Equipment",
    description: "Suitable metal surface preparation applications.",
    image: images.machinery,
  },
  {
    title: "Metal Components",
    description: "Cleaning and preparation of suitable industrial metal parts.",
    image: images.components,
  },
  {
    title: "Temple & Architectural Stone",
    description: "Controlled stone surface treatment applications.",
    image: images.indiaTemple,
  },
] as const

export const processSteps = [
  {
    number: "01",
    title: "Inspect",
    body: "Understand the material, existing coating and surface condition.",
  },
  {
    number: "02",
    title: "Prepare",
    body: "Select the appropriate preparation approach for the project.",
  },
  {
    number: "03",
    title: "Blast",
    body: "Remove unwanted surface contaminants, rust, old coatings or mill scale as applicable.",
  },
  {
    number: "04",
    title: "Finish",
    body: "Prepare the surface for the specified coating or finishing operation.",
  },
] as const
