import { useState } from "react";
import PropTypes from "prop-types";
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
} from "@chakra-ui/react";

function PersonalInformation() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      {isEdit ? (
        <form>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={e =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
              value={personalInfo.name}
              type="text"
            />
            <Box pb={4}>
              <FormHelperText>Enter your full name</FormHelperText>
            </Box>
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
            <Box pb={4}>
              <FormHelperText>Enter your email address</FormHelperText>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input
              onChange={e =>
                setPersonalInfo({ ...personalInfo, phone: e.target.value })
              }
              value={personalInfo.phone}
              type="tel"
            />
            <Box pb={4}>
              <FormHelperText>Enter your phone number</FormHelperText>
            </Box>
          </FormControl>
        </form>
      ) : (
        <VStack align="center">
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
      <Flex justifyContent={"flex-end"}>
        <Button onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Submit" : "Edit"}
        </Button>
      </Flex>
    </div>
  );
}

PersonalInformation.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  setPersonalInfo: PropTypes.func.isRequired,
};

export default PersonalInformation;
