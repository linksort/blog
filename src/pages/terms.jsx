import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "Terms of service" } }) {
      html
    }
  }
`

export default function Terms({ data }) {
  return (
    <Layout>
      <Metadata title="Terms of service" />
      <Box as="article">
        <Box mb={8}>
          <Heading as="h1" mb={2}>
            Terms of service
          </Heading>
        </Box>
        <Box
          className="prose"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </Box>
    </Layout>
  )
}
