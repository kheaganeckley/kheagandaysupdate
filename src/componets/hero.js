/** @jsx jsx */
import { jsx } from "theme-ui"
import posed, { PoseGroup } from "react-pose"
import BackgroundImage from "gatsby-background-image"

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const BoxPose = posed.div({
  enter: {
    delay: "50ms",
    y: 0,
    opency: 1,
  },
  exit: {
    y: -30,
    opency: 0,
  },
})

const TitlePose = posed.h1({
  enter: {
    y: 0,
    opency: 1,
  },
  exit: {
    y: -30,
    opency: 0,
  },
})

const DescriptionPose = posed.i({
  enter: {
    y: 0,
    opency: 1,
  },
  exit: {
    y: -30,
    opency: 0,
  },
})

const TextBox = ({ title, description, children }) => (
  <PoseGroup>
    <BoxPose
      key="myPosedGroup"
      initialPose="exit"
      sx={{
        width: "100%",
        height: "500px",
        opacity: 0.9,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "heroText",
        fontSize: "20px",
        textAlign: "center",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <TitlePose
          sx={{
            opacity: 1,
            backgroundColor: "heroBG",
            color: "heroText",
            letterSpacing: "5px",
            fontSize: "40px",
            marginBottom: 17,
          }}
        >
          {title}
        </TitlePose>
        <DescriptionPose
          sx={{
            backgroundColor: "heroBG",
            color: "heroText",
            marginBottom: "9px",
          }}
        >
          {description}
        </DescriptionPose>
        {children}
      </div>
    </BoxPose>
  </PoseGroup>
)

export default ({ title, description, imageFluid, children }) => (
  <BackgroundImage
    Tag={`section`}
    id={`media-test`}
    fluid={imageFluid}
    sx={{
      height: "100%",
      width: "100%",
      backgroundRepeat: "repeat-y",
      backgroundSize: "cover",
    }}
  >
    <TextBox title={title} description={description}>
      {children}
    </TextBox>
  </BackgroundImage>
)
