import { HStack, Box, Flex, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Heading>CV Application</Heading>
      <Text pl={20}>Create your own CV</Text>
    </HStack>
  );
}

export default Header;
