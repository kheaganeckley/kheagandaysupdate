/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import ToggleDark from "./toggle"
import { Link } from "gatsby"
import Hamburger from "./curtain/hamburger."

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const HeaderLink = ({ title }) => (
  <h2
    sx={{
      margin: "0px",
    }}
  >
    <i
      sx={{
        color: "headerText",
        fontSize: "23px",
      }}
    >
      {title}
    </i>
  </h2>
)

export default ({ onClick, toggle }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(query)

  return (
    <nav
      sx={{
        backgroundColor: "headerBG",
        color: "headerText",
        postition: "sticky",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "80px",
        padding: "8px",
        position: "fixed",
        top: "0",
        zIndex: 2,
        boxShadow: "0 16px 20px 0 rgba(0,0,0,0.2)",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Hamburger toggle={toggle} onClick={onClick} />
        <HeaderLink title={title} />
      </div>
      <ToggleDark />
    </nav>
  )
}
