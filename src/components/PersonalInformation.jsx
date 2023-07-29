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
} from "@chakra-ui/react";

function PersonalInformation({ personalInfo, setPersonalInfo }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
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
            <FormHelperText>Enter your full name.</FormHelperText>
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
            <FormHelperText>Please enter a valid email address.</FormHelperText>
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
            <FormHelperText>
              Include your country code if applicable.
            </FormHelperText>
          </FormControl>
        </div>
      ) : (
        <VStack>
          <Text>{personalInfo.name}</Text>
          <Text> {personalInfo.email}</Text>
          <Text>{personalInfo.phone}</Text>
        </VStack>
      )}
      <Button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "Edit" : "View"}
      </Button>
    </div>
  );
}

export default PersonalInformation;
