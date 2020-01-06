/** @jsx jsx */
import { jsx } from "theme-ui"
import Input from "../input"
import Button from "../button"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { useState } from "react"

const CLIENT_MUTATION = gql`
  mutation MyMutation(
    $slug: String
    $name: String
    $message: String
    $type: String
  ) {
    insert_user(
      objects: { message: $message, name: $name, slug: $slug, type: $type }
    ) {
      affected_rows
    }
  }
`

export default ({ slug, type }) => {
  const [mute] = useMutation(CLIENT_MUTATION)
  const [FormState, setFormState] = useState({
    name: "",
    message: "",
  })

  const HANDLE_CHANGE = text => ({ target }) =>
    setFormState({ ...FormState, [text]: target.value })
  const HANDLE_SUBMIT = event => {
    event.preventDefault()
    mute({
      variables: {
        type,
        slug,
        name: FormState.name,
        message: FormState.message,
      },
    })
  }

  return (
    <form
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={HANDLE_SUBMIT}
    >
      name:{" "}
      <Input
        type="text"
        placeholder="type in your name"
        onChange={HANDLE_CHANGE("name")}
      />
      message:{" "}
      <Input
        type="text"
        placeholder="type in a message"
        onChange={HANDLE_CHANGE("message")}
      />
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button type="submit">SUBMIT</Button>
      </div>
    </form>
  )
}
