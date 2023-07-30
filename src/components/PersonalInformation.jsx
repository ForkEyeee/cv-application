import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  VStack,
  Text,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";

function PersonalInformation() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  return (
    <Flex maxW={{ base: "70%", sm: "100%" }} ml={{ base: "20", sm: "0" }}>
      <form onSubmit={handleSubmit}>
        {!isEdit ? (
          <VStack>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={e =>
                  setPersonalInfo({ ...personalInfo, name: e.target.value })
                }
                value={personalInfo.name}
                type="text"
                maxLength={"50"}
              />
              <FormHelperText>Please enter your full name.</FormHelperText>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={e =>
                  setPersonalInfo({ ...personalInfo, email: e.target.value })
                }
                value={personalInfo.email}
                type="email"
              />
              <FormHelperText>Please your email address.</FormHelperText>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Phone number</FormLabel>
              <Input
                onChange={e =>
                  setPersonalInfo({ ...personalInfo, phone: e.target.value })
                }
                value={personalInfo.phone}
                type="tel"
                pattern="\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})"
              />
              <FormHelperText>
                Format: (123) 456-7890, 123-456-7890, or 1234567890
              </FormHelperText>
            </FormControl>
          </VStack>
        ) : (
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading size="md">Name:</Heading>
              <Text>{personalInfo.name}</Text>
            </Box>
            <Box>
              <Heading size="md">Email:</Heading>
              <Text>{personalInfo.email}</Text>
            </Box>
            <Box>
              <Heading size="md">Phone:</Heading>
              <Text>{personalInfo.phone}</Text>
            </Box>
          </VStack>
        )}
        <Flex justifyContent={"flex-end"} marginTop={4}>
          <Button type="submit">{isEdit ? "Edit" : "Submit"}</Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default PersonalInformation;
