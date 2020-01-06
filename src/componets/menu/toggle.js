/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { FiSun, FiMoon } from "react-icons/fi"

export default () => {
  const [colorMode, setColorMode] = useColorMode()

  const HANDLE_CLICK = () =>
    setColorMode(colorMode === "light" ? "dark" : "light")

  return (
    <div onClick={HANDLE_CLICK} sx={{ marginRight: "20px" }}>
      {colorMode === "light" ? (
        <i sx={{ cursor: "pointer" }}>
          <FiSun /> Light
        </i>
      ) : (
        <i sx={{ cursor: "pointer" }}>
          <FiMoon /> Dark{" "}
        </i>
      )}
    </div>
  )
}
