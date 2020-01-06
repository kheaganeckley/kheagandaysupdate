/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import posed from "react-pose"

const queryCurtain = graphql`
  {
    site {
      siteMetadata {
        types {
          name
        }
      }
    }
  }
`

const Box = posed.div({
  up: {
    y: "-100%",
    delay: 200,
    transition: { type: "tween" },
  },
  down: {
    y: "0%",
    delayChildren: 200,
    staggerChildren: 50,
    transition: { type: "tween" },
  },
})

const List = posed.div({
  down: { opacity: 1, y: 0 },
  up: { opacity: 0, y: 50 },
})

export default ({ toggle }) => {
  const {
    site: {
      siteMetadata: { types },
    },
  } = useStaticQuery(queryCurtain)

  return (
    <Box
      initialPose="up"
      pose={toggle}
      sx={{
        opacity: toggle === "up" ? 0 : 1,
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "curtainBG",
        zIndex: 1,
      }}
    >
      <List
        sx={{
          color: "white",
          margin: "20px",
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            color: "curtainText",
          }}
          to="/"
        >
          Home
        </Link>
      </List>

      <List
        sx={{
          color: "white",
          margin: "20px",
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            color: "curtainText",
          }}
          to="/BrowseHolidays"
        >
          Browse holidays
        </Link>
      </List>

      {types.map(({ name }) => (
        <List
          sx={{
            color: "white",
            margin: "20px",
          }}
          key={name}
        >
          <Link
            sx={{
              textDecoration: "none",
              color: "curtainText",
            }}
            to={name}
          >
            {name}
          </Link>
        </List>
      ))}
      <List
        sx={{
          color: "white",
          margin: "20px",
        }}
        key="Contact"
      >
        <Link
          sx={{
            textDecoration: "none",
            color: "curtainText",
          }}
          to="Contact"
        >
          Contact
        </Link>
      </List>
    </Box>
  )
}
