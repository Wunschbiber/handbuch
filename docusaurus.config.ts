import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wunschbiber Hilfe',
  tagline: 'Hilfe und Dokumentation für Wunschbiber',
  favicon: 'img/favicon.png',
  titleDelimiter: '·',

  future: {
    v4: true,
  },

  url: 'https://hilfe.wunschbiber.com',
  baseUrl: '/',
  organizationName: 'Wunschbiber',
  projectName: 'handbuch',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
        },
        sitemap: {
          changefreq: null,
          priority: null,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexBlog: false,
        indexPages: false,
        language: 'de',
      },
    ],
  ],

  themeConfig: {
    image: 'img/wunschbiber-social.jpg',
    metadata: [
      {name: 'application-name', content: 'Wunschbiber Hilfe'},
      {name: 'robots', content: 'noindex'},
      {name: 'apple-mobile-web-app-title', content: 'Wunschbiber Hilfe'},
      {name: 'theme-color', content: '#C34271'},
      {name: 'color-scheme', content: 'light dark'},
      {property: 'og:locale', content: 'de_DE'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Hilfe',
      logo: {
        alt: 'Wunschbiber',
        src: 'img/wunschbiber-logo.png',
        href: '/',
        width: 185,
        height: 32,
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
        {
          href: 'https://github.com/Wunschbiber/handbuch',
          position: 'right',
          className: 'navbar-github-link',
          'aria-label': 'Wunschbiber-Handbuch auf GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Wunschbiber',
        src: 'img/wunschbiber-logo.png',
        href: 'https://www.wunschbiber.de/',
        width: 260,
        height: 45,
      },
      links: [
        {
          title: 'Wunschbiber',
          items: [
            {
              label: 'Wunschbiber öffnen',
              href: 'https://www.wunschbiber.de/app/',
              target: '_self',
            },
            {
              label: 'Hauptseite',
              href: 'https://www.wunschbiber.de/',
              target: '_self',
            },
            {
              label: 'Funktionen',
              href: 'https://www.wunschbiber.de/funktionen/',
              target: '_self',
            },
          ],
        },
        {
          title: 'Hilfe & Rechtliches',
          items: [
            {
              label: 'Über uns',
              href: 'https://www.wunschbiber.de/ueber-uns/',
              target: '_self',
            },
            {
              label: 'Datenschutzerklärung',
              href: 'https://www.wunschbiber.de/datenschutz/',
              target: '_self',
            },
            {
              label: 'Impressum & Kontakt',
              href: 'https://www.wunschbiber.de/kontakt/',
              target: '_self',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Wunschbiber.de · Mit ❤ gemacht in Biberach`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
