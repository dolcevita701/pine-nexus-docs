import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/pine-nexus-docs/',
  title: 'PineNexus API Docs',
  description:
    'OpenAI-compatible API service for overseas developers. Use DeepSeek, Qwen, Kimi, and GLM with Stripe top-up and one API key.',
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
