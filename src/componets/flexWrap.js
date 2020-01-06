/** @jsx jsx */
import { jsx } from "theme-ui"
import posed, { PoseGroup } from "react-pose"

const PosedFlexBox = posed.div({
  enter: {
    opency: 1,
    delayChildren: 100,
    staggerChildren: 40,
  },
  exit: {
    opency: 0,
  },
})

export default ({ children }) => (
  <PoseGroup>
    <PosedFlexBox
      initialPose="exit"
      key="animateMeSection"
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {children}
    </PosedFlexBox>
  </PoseGroup>
)
