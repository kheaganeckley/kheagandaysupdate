/** @jsx jsx */
import { jsx } from "theme-ui"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        SEOdescription
        SEOkeywords
        author
        themeColor
        canonical
      }
    }
  }
`

export default ({ description }) => {
  const {
    site: {
      siteMetadata: {
        title,
        canonical,
        SEOdescription,
        SEOkeywords,
        author,
        themeColor,
      },
    },
  } = useStaticQuery(query)

  return (
    <Helmet>
      <html lang="en" amp />
      <title>{`${title} | ${description}`}</title>
      <meta name="description" content={SEOdescription} />
      <meta name="keywords" content={SEOkeywords} />
      <meta name="author" content={author} />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
      <meta name="theme-color" content={themeColor}></meta>
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}
