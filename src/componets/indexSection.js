/** @jsx jsx */
import { jsx } from "theme-ui"
import FlexWrap from "../componets/flexWrap"
import ButtonLink from "../componets/buttonLink"
import { FiSearch } from "react-icons/fi"

export default ({ title, children, to }) => (
  <section
    sx={{
      width: "95%",
      textAlign: "center",
      margin: "30px",
    }}
  >
    <h1
      sx={{
        fontSize: "40px",
        letterSpacing: "5px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "text",
      }}
    >
      {title}
    </h1>
    <hr
      sx={{
        height: "1px",
        width: "100%",
        backgroundColor: "text",
        borderRadius: "5px",
      }}
    />

    <FlexWrap>{children}</FlexWrap>

    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <ButtonLink to={to}>
        <FiSearch /> VEIW ALL
      </ButtonLink>
    </div>
  </section>
)
