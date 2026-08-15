import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"

const Home = lazy(() => import("./pages/Home"))
const Services = lazy(() => import("./pages/Services"))
const SandBlasting = lazy(() => import("./pages/SandBlasting"))
const SprayPainting = lazy(() => import("./pages/SprayPainting"))
const TempleStoneBlasting = lazy(() => import("./pages/TempleStoneBlasting"))
const Metallizing = lazy(() => import("./pages/Metallizing"))
const Industries = lazy(() => import("./pages/Industries"))
const Process = lazy(() => import("./pages/Process"))
const Projects = lazy(() => import("./pages/Projects"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))

function Fallback() {
  return (
    <div className="grid min-h-[50vh] place-items-center text-[11px] uppercase tracking-[0.28em] text-metal-light">
      Loading
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/sand-blasting" element={<SandBlasting />} />
            <Route path="/services/spray-painting" element={<SprayPainting />} />
            <Route path="/services/temple-stone-blasting" element={<TempleStoneBlasting />} />
            <Route path="/services/metallizing" element={<Metallizing />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/process" element={<Process />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
