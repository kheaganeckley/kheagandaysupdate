/** @jsx jsx */
import { jsx } from "theme-ui"
import Avatar from "../avatar"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { Fragment } from "react"
import { PacmanLoader } from "react-spinners"
import { useColorMode } from "theme-ui"

const CLIENT_QUERY = gql`
  query MyQuery($slug: String) {
    user(where: { slug: { _eq: $slug } }) {
      message
      name
      id
    }
  }
`

const Real = ({ data: { name, message } }) => (
  <Fragment>
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Avatar name={name} sx={{ flex: "30%" }} />
      <div
        sx={{
          flex: "40%",
          flexDirection: "column",
        }}
      >
        <h3 sx={{ color: "buttonText" }}>{name}</h3>
        {message}
      </div>
    </div>
    <hr />
  </Fragment>
)

export default ({ slug }) => {
  const { data, loading, error } = useQuery(CLIENT_QUERY, {
    variables: { slug },
    pollInterval: 500,
  })
  const [colorMode] = useColorMode()

  if (loading)
    return (
      <div>
        {" "}
        Loading{" "}
        <PacmanLoader color={colorMode === "light" ? "black" : "white"} />
      </div>
    )
  if (error)
    return (
      <div>
        {" "}
        Error. Make sure that you are conected otherwise try resfreshing the
        page. <PacmanLoader color={colorMode === "light" ? "black" : "white"} />
      </div>
    )

  return (
    <div sx={{ width: "60%" }}>
      {data.user.map(data => (
        <Real key={data.id} data={data} />
      ))}
    </div>
  )
}
