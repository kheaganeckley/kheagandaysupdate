/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Fragment } from "react"

const query = graphql`
  {
    site {
      siteMetadata {
        social {
          name
          link
        }
        types {
          name
        }
      }
    }
  }
`
export default () => {
  const {
    site: {
      siteMetadata: { social, types },
    },
  } = useStaticQuery(query)
  return (
    <footer
      sx={{
        backgroundColor: "footerBG",
        color: "footerText",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
        marginTop: "100px",
      }}
    >
      Menu
      <p
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "40px",
        }}
      >
        {types.map(({ name }) => (
          <Fragment>
            <i
              sx={{
                width: "30px",
                height: "30px",
              }}
              key={name}
            >
              <Link
                to={name}
                sx={{
                  textDecoration: "none",
                  color: "footerText",
                }}
              >
                {name}
              </Link>
            </i>{" "}
            *
          </Fragment>
        ))}
      </p>
      <i>
        <Link to="Contact" sx={{ color: "footerText" }}>
          Contact me here
        </Link>
      </i>
      <i sx={{ fontSize: "14px" }}>or on</i>
      <p
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {social.map(({ name, link }) => (
          <i
            key={name}
            sx={{
              width: "30px",
              height: "30px",
            }}
          >
            <a
              href={link}
              sx={{
                textDecoration: "none",
                color: "footerText",
              }}
            >
              {name}
            </a>
          </i>
        ))}
      </p>
    </footer>
  )
}
