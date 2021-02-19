import React from "react"
import { Link } from "gatsby"
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react"

function UnderlineLink({ to, href, children }) {
  const sx = {
    whiteSpace: "nowrap",
    "&:hover": {
      textDecoration: "underline",
    },
  }

  if (to) {
    return (
      <Text as={Link} to={to} sx={sx}>
        {children}
      </Text>
    )
  }

  return (
    <Text as="a" href={href} sx={sx}>
      {children}
    </Text>
  )
}

export default function Layout({ children }) {
  return (
    <Container maxWidth="7xl" centerContent px={6}>
      <Flex
        as="header"
        height={[24, 32]}
        width="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          as="h1"
          fontSize="md"
          fontWeight="normal"
          _hover={{ textDecoration: "underline" }}
        >
          <Link to="/">Linksort</Link>
        </Heading>
        <Box as="nav">
          <List>
            <ListItem>
              <UnderlineLink to="/blog">Blog</UnderlineLink>
            </ListItem>
          </List>
        </Box>
      </Flex>
      <Box
        as="main"
        maxWidth="3xl"
        minHeight={["calc(100vh - 14rem)", "calc(100vh - 16rem)"]}
      >
        {children}
      </Box>
      <Flex as="footer" height={32} alignItems="center">
        <Text align="center">
          Copyright &copy; {new Date().getFullYear()} Linksort LLC &middot;{" "}
          <UnderlineLink to="/terms">Terms of service</UnderlineLink> &middot;{" "}
          <UnderlineLink to="/privacy">Privacy policy</UnderlineLink> &middot;{" "}
          <UnderlineLink href="/rss.xml">RSS</UnderlineLink>
        </Text>
      </Flex>
    </Container>
  )
}
