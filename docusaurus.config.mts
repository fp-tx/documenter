import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'fp-tx/documenter',
  tagline: 'Documentation generator for fp-tx libraries',
  url: 'https://documenter.fp-tx.org',
  baseUrl: '/',

  organizationName: 'fp-tx',
  projectName: 'documenter',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/fp-tx/documenter',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'https://avatars.githubusercontent.com/u/151417963?s=200&v=4',
    navbar: {
      title: 'fp-tx/documenter',
      logo: {
        alt: 'fp-tx/documenter Logo',
        src: 'https://avatars.githubusercontent.com/u/151417963?s=200&v=4',
      },
      items: [
        {
          href: 'https://github.com/fp-tx/documenter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Jacob Alford`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
