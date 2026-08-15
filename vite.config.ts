import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const routes = [
  '/',
  '/services',
  '/services/sand-blasting',
  '/services/spray-painting',
  '/services/temple-stone-blasting',
  '/services/metallizing',
  '/industries',
  '/process',
  '/projects',
  '/about',
  '/contact',
]

function seoFiles(siteUrl: string): Plugin {
  const origin = siteUrl.replace(/\/$/, '') || 'https://www.gkcoating.in'
  return {
    name: 'gk-seo-files',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
      })
      const urls = routes
        .map((path) => `  <url><loc>${origin}${path === '/' ? '/' : path}</loc></url>`)
        .join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), seoFiles(env.VITE_SITE_URL)],
  }
})
