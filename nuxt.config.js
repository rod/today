export default {
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    sentryDsn: process.env.SENTRY_DSN || false,
  },

  head: {
    title: "Rod Dennis - Between Design & Engineering",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://rod.sh/" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Rod Dennis - Between Design & Engineering",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "I'm Rod. My constant goal is to build products that bring value and joy to people. Currently, I'm a Frontend Engineering Manager at ActiveCampaign leading teams that build websites and design systems. ",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://rod.sh/meta.png",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://rod.sh/",
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Rod Dennis - Between Design & Engineering",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "I'm Rod. My constant goal is to build products that bring value and joy to people. Currently, I'm a Frontend Engineering Manager at ActiveCampaign leading teams that build websites and design systems. ",
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://rod.sh/meta.png",
      },
    ],
    script: [
      {
        acync: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GLKNN0JW20',
      },
      {
        innerHMTL: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GLKNN0JW20');"
      }
    ]
  },
};
