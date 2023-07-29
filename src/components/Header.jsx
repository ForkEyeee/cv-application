import { HStack, Box, Flex, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Heading>CV Application</Heading>
      <Text>Enter your info and create your own CV</Text>
    </HStack>
  );
}

export default Header;
