// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dml World',
  tagline: 'A well built, optimized website, focused on your needs.',
  url: 'https://dml.world',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Dml World Inc', // Usually your GitHub org/user name.
  projectName: 'Dml World', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DmlTheDev/dml-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DmlTheDev/dml-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-5187P9K1PV',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dml World',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/DmlTheDev/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discordapp.com/invite/YYR2Fg6A6B',
            label: 'Discord',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/18221086/dml/',
              },
              {
                label: 'Github',
                href: 'https://github.com/DmlTheDev/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DmlDev/',
              },
              {
                label: 'Replit',
                href: 'https://replit.com/@LinuxUser15/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord Server',
                href: 'https://discordapp.com/invite/YYR2Fg6A6B',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Website GitHub Repo',
                href: 'https://github.com/DmlTheDev/dml-docs',
              },
              
            ],
          },
        ],
        copyright: `Copyright © 2019 - ${new Date().getFullYear()} Dml World, Inc. - Version 2.3.2`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = config;
