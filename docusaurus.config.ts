import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Woza ART',
  tagline: 'Putting art out there!',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://woza.art/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-CRLX1C660R',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 100,
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 4,
        disableInDev: false,
      },
    ],
  ],

  // To disable personalization signals, you will need to add a script 
  // that runs before the gtag script is initialized to set the parameter.
  // The Docusaurus gtag plugin doesn't have a direct config option for this parameter.
  // The recommended way to control personalization is through Google's Consent Mode API.

  // If you are not using Consent Mode, you can disable personalization signals globally 
  // for all products configured through the Google tag by setting the parameter in a custom script.

  // A common approach is to use the `scripts` or `headTags` option in docusaurus.config.js
  // to insert a custom script that sets the parameter before the main gtag script runs.

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      // This script must run *before* the main gtag script, which is 
      // automatically added by the Docusaurus plugin. 
      // Setting allow_ad_personalization_signals to false will disable
      // the use of data for personalized ads.
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('set', 'allow_ad_personalization_signals', false);
        gtag('set', 'allow_ad_personalization', false);
        gtag('set', 'allow_ad_user_data', false);
      `,
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/brand_light_horizontal.png',
    navbar: {
      logo: {
        alt: 'Woza ART Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Events', position: 'left' },
        { to: '/docs/galleries', label: 'Galleries', position: 'left' },
        { to: '/docs/artists', label: 'Artists', position: 'left' },
        { href: 'https://camerondebruyn.art', label: 'Previous Website', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Subscribe',
          items: [
            {
              label: 'Events',
              to: '/docs/subscribe',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/woza.art/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/wozaart',
            },
          ],
        },
        {
          title: 'Previous Website',
          items: [
            {
              label: `Cameron de Bruyn's Art`,
              href: 'https://camerondebruyn.art',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Woza Art.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
