import React from "react"
import { Heading, Text } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"

export default function NotFoundPage() {
  return (
    <Layout>
      <Metadata title="404: Not Found" />
      <Heading as="h1">404: Not Found</Heading>
      <Text>Nothing is here.</Text>
    </Layout>
  )
}
