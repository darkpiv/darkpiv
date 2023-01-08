const siteMetadata = {
  title: "darkpiv's blog",
  author: 'Nhất Hoàng',
  headerTitle: "darkpiv's blog",
  description:
    'Này là blog cá nhân của mình, share về những thứ bản thân cảm thấy hay ho hoặc đơn giản chỉ là 1 daily, weekly note :D Nếu bạn có hứng thú về tech, về cuộc sống của 1 coder hay thích mấy cái xàm xàm nhưng deep deep thì subscribe thôi ngại gì.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.darkpiv.com',
  siteRepo: 'https://github.com/darkpiv/darkpiv',
  siteLogo: '/static/images/avatar.jpeg',
  image: '/static/images/avatar.jpeg',
  socialBanner: '/static/images/avatar.jpeg',
  email: 'duynhat.cse@gmail.com',
  github: 'https://github.com/darkpiv',
  twitter: 'https://twitter.com/_darkpiv',
  facebook: 'https://facebook.com/darkpiv',
  youtube: 'https://www.youtube.com/channel/UCQKO3Q9-H8YC3pgUfJIOJvw',
  linkedin: 'https://www.linkedin.com/in/duynhat/',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .enving to your sel file and modify it accordection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'utterances', // supported providers: giscus, utterances, disqus
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: 'darkpiv/darkpiv',
      issueTerm: 'pathname', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'github-light',
      // theme when dark mode
      darkTheme: '',
      crossorigin: 'anonymous',
      async: true,
    },
    giscusConfig: {},
  },
}

export default siteMetadata
