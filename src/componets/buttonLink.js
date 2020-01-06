/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ to, children }) => (
  <Link
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
      padding: "5px",
      ":hover": {
        backgroundColor: "buttonText",
        color: "buttonBG",
      },
    }}
    to={to}
  >
    {children}
  </Link>
)

// /** @jsx jsx */
// import { jsx} from 'theme-ui'
// import {Link} from 'gatsby'

// export default ({to, children})=> <div
// sx={{
//     borderRadius:'3px',
//     border:'3px',
//     borderStyle:'solid',
//     borderColor:'buttonBorder',
//     backgroundColor:'buttonBG',
//     boxShadow: '0 8px 12px 0 rgba(0,0,0,0.2)',
//     letterSpacing:'2px',
//     margin:'5px',
//     textAlign:'center',
//     padding:'5px',
//     ":hover":{
//       backgroundColor:'buttonText',
//     }
// }}
// >
//   <Link
//   sx={{
//     width:'100%',
//     height:'100%',
//     textDecoration:'none',
//     color:'buttonText',
//     ":hover":{
//       color:'buttonBG'
//     }
//   }}
//   to={to}>
//     {children}
//   </Link>
// </div>
