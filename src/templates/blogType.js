/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../componets/menu/layout"
import Card from "../componets/card"
import FlexWrap from "../componets/flexWrap"
import AniHeader from "../componets/ANiHeader"
import Seo from "../componets/Seo"

export const query = graphql`
  query MyQueryType($type: String) {
    allContentfulKruger(filter: { type: { eq: $type } }) {
      edges {
        node {
          image {
            fluid(maxWidth: 370) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          type
          title
          slug
          description
        }
      }
    }
  }
`

export default ({
  data: {
    allContentfulKruger: { edges },
  },
}) => (
  <Layout>
    <Seo description={edges[0].node.type} />

    <h1
      sx={{
        letterSpacing: "4px",
      }}
    >
      <AniHeader AniText={edges[0].node.type} />
    </h1>

    <div sx={{ width: "92%" }}>
      <FlexWrap>
        {edges.map(({ node: { type, title, description, image, slug } }) => (
          <Card
            key={title}
            header={title}
            description={description}
            ImageFluid={image.fluid}
            to={`${type}/${slug}`}
          />
        ))}
      </FlexWrap>
    </div>
  </Layout>
)
