/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../componets/menu/layout"
import Button from "../componets/button"
import Input from "../componets/input"
import AniHeader from "../componets/ANiHeader"
import Seo from "../componets/Seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        emailForFormSpree
      }
    }
  }
`

export default () => {
  const {
    site: {
      siteMetadata: { emailForFormspree },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Seo description="Contact" />
      <h1
        sx={{
          marginTop: "50px",
        }}
      >
        <AniHeader AniText="Contact me" />
      </h1>

      <form
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
          marginBottom: "200px",
        }}
        action={`https://formspree.io/${emailForFormspree}`}
        method="POST"
      >
        Name: <Input type="text" placeholder="Type in your name" />
        Email: <Input type="text" placeholder="Type in your email adress" />
        Message:
        <Input
          type="text"
          placeholder="Type in a message and I will get back asap"
        />
        <Button>SUBMIT</Button>
      </form>
    </Layout>
  )
}
