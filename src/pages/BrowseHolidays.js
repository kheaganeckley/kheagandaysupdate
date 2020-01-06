/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../componets/menu/layout"
import Card from "../componets/card"
import { graphql } from "gatsby"
import IndexSection from "../componets/indexSection"
import Seo from "../componets/Seo"

export const query = graphql`
  {
    allContentfulKruger(filter: { fetured: { eq: true } }) {
      edges {
        node {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          type
          slug
          description
          title
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        types {
          name
        }
      }
    }
  }
`

export default ({
  data: {
    allContentfulKruger: { edges },
    site: {
      siteMetadata: { types },
    },
  },
}) => (
  <Layout>
    <Seo description="Browse" />
    {types.map(({ name }) => (
      <IndexSection key={name} title={name} to={name}>
        {edges
          .filter(({ node: { type } }) => type === name)
          .map(({ node: { title, description, image, type, slug } }) => (
            <Card
              key={title}
              header={title}
              description={description}
              ImageFluid={image.fluid}
              to={`${type}/${slug}`}
            />
          ))}
      </IndexSection>
    ))}
  </Layout>
)
