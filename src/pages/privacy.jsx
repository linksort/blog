import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "Privacy policy" } }) {
      html
    }
  }
`

export default function Privacy({ data }) {
  return (
    <Layout>
      <Metadata title="Privacy policy" />
      <Box as="article">
        <Box mb={8}>
          <Heading as="h1" mb={2}>
            Privacy policy
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
