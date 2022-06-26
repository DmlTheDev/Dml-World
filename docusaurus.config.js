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
    scripts: [
      {
        src: 'https://kit.fontawesome.com/f083aaeec4.js',
        async: true,
        crossorigin: "anonymous"
      },
    ],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DmlTheDev/Dml-World/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DmlTheDev/Dml-World/blob/master/',
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
      algolia: {
        indexName: "dmlworld",
        appId: '6XJCH4JQR1',
        apiKey: "b4714a5318c3d9c70ef7710dead0e932",
        contextualSearch: false,
        algoliaOptions: {},
      },
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
            html: '<i class="fa-brands fa-github"></i>',
            position: 'right',
          },
          {
            href: 'https://discordapp.com/invite/YYR2Fg6A6B',
            html: '<i class="fa-brands fa-discord"></i>',
            position: 'right',
          },
          {
            href: 'https://ko-fi.com/dmlworld/',
            html: '<i class="fa-solid fa-mug-hot"></i>',
            position: 'right',
          },
          {
            href: 'https://www.reddit.com/user/bbwevb/',
            html: '<i class="fa-brands fa-reddit-alien"></i>',
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
              {
                label: 'Interesting',
                to: '/interesting',
              },
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
                label: 'Reddit',
                href: 'https://www.reddit.com/user/bbwevb/',
              },
              {
                label: 'Github',
                href: 'https://github.com/DmlTheDev/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DmlDev/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord Server',
                href: 'https://discordapp.com/invite/YYR2Fg6A6B/',
              },
              {
                label: 'Replit',
                href: 'https://replit.com/@LinuxUser15/',
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
                label: 'GitHub Repo',
                href: 'https://github.com/DmlTheDev/Dml-World/',
              },
              {
                label: 'Support me on Ko-Fi',
                href: 'https://ko-fi.com/dmlworld/',
              },
              {
                label: 'Dev',
                href: 'https://dev.to/dmldev/',
              },
              
              
            ],
          },
        ],
        copyright: `Copyright © 2019 - ${new Date().getFullYear()} Dml World, Inc. -  v2.3.7`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = config;
