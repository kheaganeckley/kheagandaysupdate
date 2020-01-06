/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import ButtonLink from "../componets/buttonLink"
import { FiSearch } from "react-icons/fi"
import posed from "react-pose"

const Article = posed.article({
  enter: {
    y: 0,
    opency: 1,
  },
  exit: {
    y: -100,
    opency: 0,
  },
})

const TextBox = ({ header, description, to }) => (
  <div
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
    }}
  >
    <div
      sx={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h3
        sx={{
          color: "cardHeader",
          fontSize: "27px",
          fontWeight: "bold",
        }}
      >
        {header}
      </h3>
      <i>{description}</i>
    </div>

    <div
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: "25px",
        marginBottom: "10px",
      }}
    >
      <ButtonLink to={to}>
        <FiSearch /> VEIW
      </ButtonLink>
    </div>
  </div>
)

export default ({ ImageFluid, header, description, to }) => (
  <Article
    initialPose="exit"
    sx={{
      width: "370px",
      height: "430px",
      display: "flex",
      flexDirection: "column",
      justifyContent: " center",
      alignItems: "center",
      backgroundColor: "cardBG",
      color: "cardText",
      borderRadius: "5px",
      boxShadow: "0 16px 20px 0 rgba(0,0,0,0.2)",
      margin: "20px",
    }}
  >
    <Img
      sx={{
        width: "100%",
      }}
      fluid={ImageFluid}
    />

    <TextBox header={header} description={description} to={to} />
  </Article>
)
