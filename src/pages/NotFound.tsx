import { ButtonLink } from "../components/Buttons"
import { Seo } from "../components/Seo"

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | GK Coating" description="The requested page could not be found." path="/404" />
      <section className="container-site flex min-h-[70vh] flex-col justify-center pt-24">
        <p className="text-[11px] uppercase tracking-[0.28em] text-metal-light">404</p>
        <h1 className="mt-4 text-4xl font-extrabold">This surface was not found.</h1>
        <p className="mt-4 max-w-lg text-offwhite/70">The page may have moved. Return home or request a quote.</p>
        <div className="mt-8">
          <ButtonLink to="/">Back to home</ButtonLink>
        </div>
      </section>
    </>
  )
}
