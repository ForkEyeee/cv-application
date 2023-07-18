import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
function PersonalInformation({ name, setName }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
        />
        <FormHelperText>Enter your full name.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <FormHelperText>Please enter a valid email address.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Phone number</FormLabel>
        <Input
          onChange={e => setPhone(e.target.value)}
          value={phone}
          type="number"
        />
        <FormHelperText>
          Include your country code if applicable.
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default PersonalInformation;
