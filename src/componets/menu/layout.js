/** @jsx jsx */
import { jsx } from "theme-ui"
import Nav from "./nav"
import Footer from "./footer"
import { Fragment, useState } from "react"
import Curtain from "./curtain/curtain"

export default ({ children }) => {
  const [Toggle, setToggle] = useState("up")
  const HANDLE_CLICK = () =>
    setToggle(prevState => (prevState === "up" ? "down" : "up"))

  return (
    <Fragment>
      <Nav toggle={Toggle} onClick={HANDLE_CLICK} />

      <Curtain toggle={Toggle} />
      <section
        sx={{
          marginTop: "95px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fragment key="AniGroup">{children}</Fragment>
      </section>
      <Footer />
    </Fragment>
  )
}
