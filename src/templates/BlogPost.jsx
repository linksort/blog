import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons"

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
      <Box as="nav" mt={8}>
        <List>
          {previous && (
            <ListItem>
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                <Text
                  as="span"
                  fontSize="lg"
                  display="inline-flex"
                  alignItems="center"
                  _hover={{ textDecoration: "underline" }}
                >
                  <ArrowBackIcon />
                  <Text as="span" ml={1}>
                    Previous post:
                  </Text>
                  <Text as="span" fontWeight="bold" ml={1}>
                    {previous.frontmatter.title}
                  </Text>
                </Text>
              </Link>
            </ListItem>
          )}
          {next && (
            <ListItem>
              <Link to={`/blog${next.fields.slug}`} rel="next">
                <Text
                  as="span"
                  fontSize="lg"
                  display="inline-flex"
                  alignItems="center"
                  _hover={{ textDecoration: "underline" }}
                >
                  <Text as="span" mr={1}>
                    Next post:
                  </Text>
                  <Text as="span" fontWeight="bold" mr={1}>
                    {next.frontmatter.title}
                  </Text>
                  <ArrowForwardIcon />
                </Text>
              </Link>
            </ListItem>
          )}
        </List>
      </Box>
    </Layout>
  )
}
