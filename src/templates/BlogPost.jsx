import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
export default function BlogPostTemplate({ data }) {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Layout>
      <Metadata
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Box as="article">
        <Box mb={8}>
          <Heading as="h1" mb={2}>
            {post.frontmatter.title}
          </Heading>
          <Text as="time" dateTime={post.frontmatter.date}>
            {post.frontmatter.date}
          </Text>
        </Box>
        <Box
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Box>
      <Box as="nav">
        <List>
          <ListItem>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </ListItem>
          <ListItem>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </ListItem>
        </List>
      </Box>
    </Layout>
  )
}
