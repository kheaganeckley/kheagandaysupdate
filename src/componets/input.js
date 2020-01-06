/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <input
    {...props}
    sx={{
      borderRadius: "3px",
      width: "100%",
      border: "3px",
      borderStyle: "solid",
      borderColor: "inputBorder",
      backgroundColor: "inputBG",
      color: "inputText",
      marginBottom: "15px",
    }}
  >
    {props.children}
  </input>
)
