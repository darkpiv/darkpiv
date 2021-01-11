module.exports = {
  title: 'darkpiv',
  tagline: 'The goal is not to be better than the other man, but your previous self.',
  url: 'https://darkpiv.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'github.com/darkpiv',
  projectName: 'darkpiv',
  themeConfig: {
    navbar: {
      title: 'darkpiv',
      logo: {
        alt: 'darkpiv',
        src: 'images/logo.png',
      },
      items: [
        {
          to: 'blog/',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/darkpiv/darkpiv',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/darkpiv/darkpiv',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/darkpiv/darkpiv/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/darkpiv/darkpiv/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
