import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OneKash Labs',
  tagline: 'Apps and tools that keep your data with you',
  favicon: 'images/logo-32-favicon.png',
  future: {v4: true},
  url: 'https://onekash.org',
  baseUrl: '/',
  organizationName: 'OneKashLabs',
  projectName: 'onekashlabs.github.io',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/images/logo-180-apple-touch.png'}},
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#11141c'}},
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://onekash.org/#org',
        name: 'OneKash Labs',
        url: 'https://onekash.org',
        logo: 'https://onekash.org/images/logo.png',
        email: 'hello@onekash.org',
        sameAs: ['https://github.com/OneKashLabs', 'https://github.com/0nekash', 'https://0nekash.github.io'],
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'OneKash Labs apps and tools',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'SoftwareApplication',
              name: 'KashCal',
              url: 'https://kashcal.onekash.org',
              operatingSystem: 'Android',
              applicationCategory: 'BusinessApplication',
              description: 'A calendar for iCloud, CalDAV and the calendars already on your phone. Works offline.',
              offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
              author: {'@id': 'https://onekash.org/#org'},
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'SoftwareApplication',
              name: 'KashPass',
              url: 'https://kashpass.onekash.org',
              operatingSystem: 'Android',
              applicationCategory: 'SecurityApplication',
              description: 'Open and edit your KeePass vault on your phone. No internet permission.',
              offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
              author: {'@id': 'https://onekash.org/#org'},
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'SoftwareApplication',
              name: 'KashCake',
              url: 'https://github.com/OneKashLabs/KashCake',
              operatingSystem: 'Android',
              applicationCategory: 'LifestyleApplication',
              description: 'Birthday reminders from your contacts, worked out on your phone.',
              offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
              author: {'@id': 'https://onekash.org/#org'},
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'iCloud Calendar MCP',
              url: 'https://github.com/icloud-calendar-mcp/icloud-calendar-mcp',
              codeRepository: 'https://github.com/icloud-calendar-mcp/icloud-calendar-mcp',
              description: 'An MCP server that gives AI agents read and write access to iCloud Calendar.',
              author: {'@id': 'https://onekash.org/#org'},
            },
          },
        ],
      }),
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'images/og.png',
    metadata: [
      {
        name: 'description',
        content:
          'Android apps and developer tools from OneKash Labs: KashCal, KashPass, KashCake and iCloud Calendar MCP. Free and open source, with no ads or tracking.',
      },
      {property: 'og:site_name', content: 'OneKash Labs'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '675'},
      {property: 'og:image:alt', content: 'Apps and tools that keep your data with you. Kash, the OneKash Labs mascot, above the KashCal, KashPass and KashCake icons.'},
      {name: 'twitter:image:alt', content: 'Apps and tools that keep your data with you. Kash, the OneKash Labs mascot, above the KashCal, KashPass and KashCake icons.'},
    ],
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'OneKash Labs',
      logo: {alt: 'OneKash Labs logo', src: 'images/logo.svg'},
      items: [
        {to: '/#apps', label: 'Apps', position: 'left', activeBaseRegex: '^$'},
        {to: '/#developers', label: 'Developers', position: 'left', activeBaseRegex: '^$'},
        {href: 'https://github.com/sponsors/one-kash', label: 'Donate', position: 'right'},
        {href: 'https://github.com/OneKashLabs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {label: 'KashCal', href: 'https://kashcal.onekash.org'},
            {label: 'KashPass', href: 'https://kashpass.onekash.org'},
            {label: 'KashCake', href: 'https://github.com/OneKashLabs/KashCake'},
            {label: 'GitHub', href: 'https://github.com/OneKashLabs'},
            {label: 'Donate', href: 'https://github.com/sponsors/one-kash'},
            {label: 'Contact', href: 'mailto:hello@onekash.org'},
          ],
        },
      ],
      copyright: 'Built with love in Austin by OneKash Labs.',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
