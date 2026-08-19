import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { MobileCallBar, WhatsAppButton } from "./WhatsAppButton"

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-graphite pb-14 text-offwhite md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-metal focus:px-4 focus:py-2 focus:text-graphite"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </div>
  )
}
