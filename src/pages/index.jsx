import React from "react"
import { Link } from "gatsby"
import { Box, Text, Heading } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"

function ProminentLink({ to, children }) {
  return (
    <Text
      as={Link}
      to={to}
      sx={{
        fontWeight: "bold",
        textDecoration: "underline",
        textDecorationColor: theme => theme.colors.accent,
        textDecorationThickness: "0.18rem",
        "&:hover": {
          color: "black",
          textDecorationColor: theme => theme.colors.primary,
        },
      }}
    >
      {children}
    </Text>
  )
}

export default function Index() {
  return (
    <Layout>
      <Metadata />
      <Box pt={[0, 24]}>
        <Heading mb={4}>
          Hello{" "}
          <span role="img" aria-label="waving hand emoji">
            &#x1F44B;
          </span>
        </Heading>
        <Text mb={4} fontSize="xl" lineHeight="tall">
          Not much is going on here yet. Some day soon, on this very page, there
          will be an application where you can save, organize, and share{" "}
          <Text as="span" sx={{ whiteSpace: "nowrap " }}>
            your links.{" "}
            <span role="img" aria-label="smiling face">
              &#x1F642;
            </span>
          </Text>
        </Text>
        <Text fontSize="xl" lineHeight="tall">
          In the meantime, we're keeping a{" "}
          <ProminentLink to="/blog">blog</ProminentLink> where the team{" "}
          <ProminentLink to="/blog">writes about</ProminentLink> the process of
          building this app.
        </Text>
      </Box>
    </Layout>
  )
}
