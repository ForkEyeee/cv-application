import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Text,
  VStack,
  Box,
  Flex,
} from "@chakra-ui/react";

function PersonalInformation({ personalInfo, setPersonalInfo }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Box maxW={"100%"}>
      {!isEdit ? (
        <div>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={e =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
              value={personalInfo.name}
              type="text"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={e =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
              value={personalInfo.email}
              type="email"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input
              onChange={e =>
                setPersonalInfo({ ...personalInfo, phone: e.target.value })
              }
              value={personalInfo.phone}
              type="text"
            />
          </FormControl>
        </div>
      ) : (
        <VStack align="start">
          <Box>
            <Text fontWeight="bold">Name:</Text>
            <Text>{personalInfo.name}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Email:</Text>
            <Text>{personalInfo.email}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Phone:</Text>
            <Text>{personalInfo.phone}</Text>
          </Box>
        </VStack>
      )}
      <Flex justifyContent={"flex-end"} pt={5}>
        <Button onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Edit" : "Submit"}
        </Button>
      </Flex>
    </Box>
  );
}

export default PersonalInformation;
