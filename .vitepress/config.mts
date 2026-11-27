import { defineConfig } from 'vitepress'

const DOCS_ORIGIN = 'https://docs.apinexusdev.com'

function canonicalUrl(relativePath: string): string | undefined {
  const slug = relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
  if (slug === '404') return undefined
  if (slug === 'index') return `${DOCS_ORIGIN}/`
  return `${DOCS_ORIGIN}/${slug}.html`
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/pine-nexus-docs/',
  title: 'PineNexus API Docs',
  description:
    'How to set the PineNexus endpoint and API key, and how Cursor, SDKs, and Cherry Studio differ. Sign in with Google or GitHub — no Chinese phone number required. New accounts receive a $1 trial credit.',
  transformHead({ pageData, title, description }) {
    if (pageData.relativePath.replace(/\\/g, '/') === '404.md') return
    const href = canonicalUrl(pageData.relativePath)
    const head: [string, Record<string, string>][] = [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }]
    ]
    if (href) {
      head.unshift(['link', { rel: 'canonical', href }])
      head.push(['meta', { property: 'og:url', content: href }])
    }
    return head
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Models', link: '/#supported-models' },
      { text: 'Clients', link: '/clients' },
      { text: 'API Examples', link: '/api-examples' },
      { text: 'Billing', link: '/billing' },
      { text: 'Model pricing', link: 'https://apinexusdev.com/pricing' },
      { text: 'Dashboard', link: 'https://apinexusdev.com' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Supported models', link: '/#supported-models' },
          { text: 'Client setup', link: '/clients' },
          { text: 'API examples', link: '/api-examples' },
          { text: 'Billing', link: '/billing' },
          { text: 'Model pricing', link: 'https://apinexusdev.com/pricing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dolcevita701/pine-nexus-docs' }
    ]
  }
})
