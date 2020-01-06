/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <button
    {...props}
    sx={{
      textDecoration: "none",
      borderRadius: "3px",
      border: "3px",
      borderStyle: "solid",
      borderColor: "buttonBorder",
      backgroundColor: "buttonBG",
      boxShadow: "0 8px 12px 0 rgba(0,0,0,0.2)",
      letterSpacing: "2px",
      margin: "5px",
      textAlign: "center",
      color: "buttonText",
      cursor: "pointer",
      padding: "5px",
      ":hover": {
        backgroundColor: "buttonText",
        color: "buttonBG",
      },
    }}
  >
    {props.children}
  </button>
)
