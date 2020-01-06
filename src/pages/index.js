/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../componets/menu/layout"
import { graphql, Link } from "gatsby"
import Hero from "../componets/hero"
import Seo from "../componets/Seo"

const CustomButtonLink = ({ to, children }) => (
  <Link
    sx={{
      fontSize: "10px",
      textDecoration: "none",
      borderRadius: "3px",
      border: "3px",
      borderStyle: "solid",
      borderColor: "white",
      backgroundColor: "black",
      boxShadow: "0 8px 12px 0 rgba(0,0,0,0.2)",
      letterSpacing: "2px",
      margin: "5px",
      textAlign: "center",
      color: "white",
      padding: "5px",
      ":hover": {
        backgroundColor: "white",
        color: "black",
      },
    }}
    to={to}
  >
    {children}
  </Link>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        About
      }
    }
    file(relativePath: { eq: "cave.jpg" }) {
      childImageSharp {
        fluid(grayscale: true, jpegProgressive: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
    site: {
      siteMetadata: { title, description, About },
    },
  },
}) => (
  <Layout>
    <Seo />
    <Hero title={title} description={description} imageFluid={fluid}>
      <CustomButtonLink to="BrowseHolidays">GET STARTED</CustomButtonLink>
    </Hero>
    <h3
      sx={{
        marginTop: "70px",
      }}
    >
      About
    </h3>
    <p sx={{ width: "60%", textAlign: "center" }}>{About}</p>
  </Layout>
)
