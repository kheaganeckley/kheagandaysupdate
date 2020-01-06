/** @jsx jsx */
import { jsx } from "theme-ui"
import posed from "react-pose"

const LineStyle = {
  width: "30px",
  height: "4px",
  backgroundColor: "hamburgerBG",
  margin: "8px",
  borderRadius: "5px",
}

const LineTop = posed.div({
  down: {
    rotate: "130deg",
    y: 6.5,
  },
  up: {
    rotate: "0deg",
    y: 0,
  },
})

const LineBottom = posed.div({
  down: {
    rotate: "-130deg",
    y: -6.5,
  },
  up: {
    rotate: "0deg",
    y: 0,
  },
})

export default props => (
  <div {...props} sx={{ cursor: "pointer" }}>
    <LineTop pose={props.toggle} sx={LineStyle}></LineTop>

    <LineBottom pose={props.toggle} sx={LineStyle}></LineBottom>
  </div>
)
