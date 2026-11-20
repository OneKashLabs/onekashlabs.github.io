import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OneKash Labs',
  tagline: 'Private, open-source apps',
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
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#1C1C1E'}},
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'OneKash Labs',
        url: 'https://onekash.org/',
        publisher: {'@id': 'https://onekash.org/#org'},
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://onekash.org/#org',
        name: 'OneKash Labs',
        url: 'https://onekash.org',
        description: 'OneKash Labs makes private, open-source apps, and helps people learn to build, customize, and run their own.',
        logo: 'https://onekash.org/images/logo.png',
        sameAs: ['https://github.com/OneKashLabs'],
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
              description: 'A calendar for iCloud, CalDAV, and the calendars already on your phone. Works offline.',
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
              url: 'https://kashcake.onekash.org',
              operatingSystem: 'Android',
              applicationCategory: 'LifestyleApplication',
              description: 'Birthday and anniversary reminders from your contacts. No internet access.',
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
              url: 'https://mcp.onekash.org',
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
      {property: 'og:type', content: 'website'},
      {
        name: 'description',
        content:
          'Android apps and developer tools from OneKash Labs: KashCal, KashPass, KashCake, and iCloud Calendar MCP. Free and open source, with no ads or tracking.',
      },
      {property: 'og:site_name', content: 'OneKash Labs'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '675'},
      {property: 'og:image:alt', content: 'OneKash Labs: What should we build together? The KashCal, KashPass, KashCake, and iCloud Calendar MCP icons, a space for one more, and Kash waving.'},
      {name: 'twitter:image:alt', content: 'OneKash Labs: What should we build together? The KashCal, KashPass, KashCake, and iCloud Calendar MCP icons, a space for one more, and Kash waving.'},
    ],
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'OneKash Labs',
      logo: {alt: 'OneKash Labs logo', src: 'images/logo.svg'},
      items: [
        {to: '/#apps', label: 'Apps', position: 'left', activeBaseRegex: '^$'},
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
            {label: 'KashCake', href: 'https://kashcake.onekash.org'},
            {label: 'GitHub', href: 'https://github.com/OneKashLabs'},
            {label: 'Donate', href: 'https://github.com/sponsors/one-kash'},
            {label: 'Contact', to: '/#talk'},
          ],
        },
      ],
      copyright: 'Built with love in Austin by OneKash Labs.',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
