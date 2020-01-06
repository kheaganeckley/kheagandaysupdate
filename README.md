# Steps to success!

gatsby new

yarn add @apollo/react-hooks @contentful/rich-text-react-renderer @emotion/core @mdx-js/react @theme-ui/typography apollo-boost babel-plugin-styled-components dotenv gatsby-background-image gatsby-image gatsby-plugin-manifest gatsby-plugin-mdx gatsby-plugin-offline gatsby-plugin-playground gatsby-plugin-react-helmet gatsby-plugin-sharp gatsby-plugin-theme-ui gatsby-plugin-typography gatsby-source-contentful gatsby-source-filesystem gatsby-transformer-sharp graphql-tag isomorphic-fetch react-helmet react-icons react-pose react-pose-text react-typography theme-ui typography typography-theme-kirkham react-spinners react-scroll

add the enviroment varible files

.env.production
.env.development

and add

HASURA_KEY=
APOLLO_CLIENT=

# ok cool, you should be ready to go!

1. gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world

2) yarn add gatsby-image gatsby-plugin-styled-components styled-components babel-plugin-styled-components apollo-boost graphql-tag dotenv gatsby-plugin-offline isomorphic-fetch gatsby-plugin-react-helmet react-helmet gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem gatsby-plugin-manifest @apollo/react-hooks

to check out

- gatsby-plugin-prefetch-google-fonts
- togle dark
- layout

////////////////////
/// create pages
////////////////////

/////////////
/// contentful
//////////////
yarn add gatsby-source-contentful
{
resolve: `gatsby-source-contentful`,
options: {
spaceId: process.env.SPACEID,
accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
host: `preview.contentful.com`,
},
},

////////////////
/// mdx
////////////////
yarn add gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react gatsby-mdx
{
resolve: `gatsby-source-filesystem`,
options: {
name: `pages`,
path: `${__dirname}/src/pages/`,
},
},
`gatsby-plugin-mdx`,
},

import {MDXrenderer} from gatsby-mdx

/////////////
//theme transition link
////////////
yarn add gatsby-plugin-transition-link
yarn add gsap

/////////////
//theme ui
////////////
yarn add @theme-ui/components //optional
yarn add theme-ui gatsby-plugin-theme-ui @emotion/core @mdx-js/react

// rm
require("dotenv").config(
{
path: `.env.${process.env.NODE_ENV}`,
}
)

module.exports = {
siteMetadata: {
title: `My news blog`,
description: `my ramblings about stuff`,
author: `@kheagan`,
social:{
twitter:"",
instagram:"",
facebook:""
}

},
plugins: [
`gatsby-plugin-offline`,
`gatsby-plugin-react-helmet`,
`gatsby-transformer-sharp`,
`gatsby-plugin-sharp`,
`gatsby-plugin-styled-components`,
{
resolve: `gatsby-source-filesystem`,
options: {
name: `images`,
path: `${__dirname}/src/images`,
},
},
{
resolve: `gatsby-plugin-manifest`,
options: {
name: `gatsby-starter-default`,
short_name: `starter`,
start_url: `/`,
background_color: `#663399`,
theme_color: `#663399`,
display: `minimal-ui`,
icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
},
},
],
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// programtically creating pages

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
const { createPage } = actions

const {data} = await graphql(`{ feturedblogs:allContentfulBlog{ edges{ node{ slug } } } accom:allContentfulAccommadation{ edges{ node{ slug } } } }`)

data.feturedblogs.edges.forEach( ({node}) => {
createPage({
path: `blogs/${node.slug}`,
component: path.resolve(`./src/appConstruct/constructBlogTemp.js`),
context: {
slug: node.slug
},
})
})
data.accom.edges.forEach( ({node}) => {
createPage({
path: `accomadation/${node.slug}`,
component: path.resolve(`./src/appConstruct/constructAccomTemp.js`),
context: {
slug: node.slug
},
})
})

}
