/** @jsx jsx */
import { jsx } from "theme-ui"
import SplitText from "react-pose-text"

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}

export default ({ AniText }) => (
  <SplitText
    sx={{
      color: "text",
      textAlign: "center",
    }}
    initialPose="exit"
    pose="enter"
    charPoses={charPoses}
  >
    {AniText}
  </SplitText>
)
