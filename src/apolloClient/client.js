import Client, { InMemoryCache } from "apollo-boost"
import fetch from "isomorphic-fetch"

export default new Client({
  uri: process.env.APOLLO_CLIENT,
  fetch,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_KEY,
  },
  cache: new InMemoryCache(),
})
