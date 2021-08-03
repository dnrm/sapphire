import { Container, Flex, Heading, Code, Avatar } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container>
      <Flex rounded="full">
        <Avatar name="Daniel Medina" height="8em" width="8em" borderColor="gray.600" m={2} border="4px" src="https://cdn.medina.dev/dnrm.jpg" />
      </Flex>
      <Heading fontSize="8xl">Hello World</Heading>
      <Code>const chakra = 'amazing'</Code>
    </Container>
  )
}
