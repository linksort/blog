import React from "react"
import { Link, graphql } from "gatsby"
import { List, ListItem, Heading, Box, Text, Stack } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
          description
        }
      }
    }
  }
`
export default function BlogIndex({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Metadata title="Blog" />
      <List>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <ListItem key={post.fields.slug} mb={16}>
              <Stack spacing={4}>
                <Heading
                  sx={{
                    fontSize: "3xl",
                    textDecoration: "underline",
                    textDecorationColor: theme => theme.colors.accent,
                    textDecorationThickness: "0.14em",
                    transition: "200ms",
                    "&:hover": {
                      color: "black",
                      textDecorationColor: theme => theme.colors.primary,
                    },
                  }}
                >
                  <Link to={`/blog${post.fields.slug}`}>{title}</Link>
                </Heading>
                <Text as="time" dateTime={post.frontmatter.date}>
                  {post.frontmatter.date}
                </Text>
                <Box className="prose">
                  <p>{post.frontmatter.description || post.excerpt}</p>
                </Box>
                <Text>
                  <Text
                    as={Link}
                    to={`/blog${post.fields.slug}`}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Continue reading
                  </Text>
                  <Text as="span" sx={{ verticalAlign: "top", paddingLeft: 1 }}>
                    <ArrowForwardIcon />
                  </Text>
                </Text>
              </Stack>
            </ListItem>
          )
        })}
      </List>
    </Layout>
  )
}
