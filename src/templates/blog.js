/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../componets/menu/layout"
import Img from "gatsby-image"
import Messenger from "../componets/messenger/index"
import AniHeader from "../componets/ANiHeader"
import Seo from "../componets/Seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query MyQueryTwo($slug: String) {
    contentfulKruger(slug: { eq: $slug }) {
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      slug
      title
      type
      description
      body {
        json
      }
    }
  }
`

export default ({
  data: {
    contentfulKruger: {
      body,
      title,
      description,
      slug,
      type,
      image: { fluid },
    },
  },
}) => (
  <Layout>
    <Seo description={`${type}/${slug}`} />
    <h1
      sx={{
        letterSpacing: "4px",
      }}
    >
      <AniHeader AniText={title} />
    </h1>

    <div
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <i
          sx={{
            marginBottom: "20px",
          }}
        >
          <AniHeader AniText={description} />
        </i>
      </div>
      <article>{body ? documentToReactComponents(body.json) : null}</article>

      <Messenger slug={slug} type={type} />

      <div
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Img
          sx={{
            width: "100%",
            maxWidth: "700px",
          }}
          fluid={fluid}
        />
      </div>
    </div>
  </Layout>
)
