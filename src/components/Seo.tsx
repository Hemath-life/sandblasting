type SeoProps = {
  title: string
  description: string
  path: string
}

export function Seo({ title, description, path }: SeoProps) {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "https://www.gkcoating.in"
  const url = `${site}${path}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site}/favicon.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
