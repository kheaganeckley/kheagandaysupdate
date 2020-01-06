require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kheagan days`,
    description: `A collection of my holidays`,
    SEOdescription:
      "This is a blog about some of my(kheagan eckley) holidays. Its got posts about the beach, the kruger, and much more. I hope you enjoy ",
    SEOkeywords: "kruger",
    themeColor: "black",
    canonical: "https://kandoit.kheaganeckley.now.sh/",
    siteUrl: "https://kheagandays.now.sh/",
    emailForFormSpree: "kheagan.eckley@gmail.com",
    author: `@kheagan`,
    footer: "hello i am a footer",
    About:
      "This is a little blog about some of my holidays. I wanted to keep these memories in a accessable place thats easy to share with family, friends, and other blogers. I hope you enjoy!",
    social: [
      {
        name: "Facebook",
        link: "hello",
      },
      {
        name: "Instagram",
        link: "hello",
      },
      {
        name: "Twitter",
        link: "hello",
      },
    ],
    types: [
      {
        name: "Siting",
      },
      {
        name: "Blog",
      },
      {
        name: "A beach kind of life",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155301000-1",
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'kheagandays.now.sh/',
    //     sitemap: 'kheagandays.now.sh/sitemap.xml/',
    //     policy: [{ userAgent: '*', allow: '/' }]
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "g1fw975wghdt",
        accessToken: "9iouJalbfzUJX-oqhUzaGP4xgUDq0nkksv3jWrop37o",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kheagan days`,
        short_name: `Kheagan days`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/kheaganIcon512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
