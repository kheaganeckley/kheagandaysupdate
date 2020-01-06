/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ name }) => (
  <div
    sx={{
      height: "70px",
      width: "70px",
      maxHeight: "70px",
      minHeight: "70px",
      minWidth: "70px",
      maxWidth: "70px",
      borderRadius: "50px",
      backgroundColor: "avatarBG",
      color: "avatarText",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "10px",
    }}
  >
    {name[0] ? name[0].toUpperCase() : null}
  </div>
)
