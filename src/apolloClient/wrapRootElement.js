import React from "react"
import Client from "./client"
import { ApolloProvider } from "@apollo/react-hooks"
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={Client}>{element}</ApolloProvider>
)
