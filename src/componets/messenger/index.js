/** @jsx jsx */
import { jsx } from "theme-ui"
import Form from "./postform"
import PostList from "./postlist"

export default ({ slug, type }) => (
  <article
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "40px",
    }}
  >
    <Form slug={slug} type={type} />
    <PostList slug={slug} />
  </article>
)
