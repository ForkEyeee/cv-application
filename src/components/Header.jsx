import { Flex, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      justifyContent={"space-between"}
      padding={5}
      flexDirection={{ base: "column", sm: "row" }}
      gap="20px !important"
      alignItems={{ base: "center" }}
      width="400px"
      className="test"
    >
      <Heading fontSize={{ base: "20px", sm: "26px" }}>CV Application</Heading>
      <Text>
        <em>Create your CV</em>
      </Text>
    </Flex>
  );
}

export default Header;
