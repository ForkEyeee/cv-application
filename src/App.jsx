import { useState } from "react";
import "./index.css";
import { Box, Flex, Button, Divider, AbsoluteCenter } from "@chakra-ui/react";
import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";

function App() {
  const [experience, setExperience] = useState([]);

  function handleAddExperience() {
    setExperience(experience.concat(<Experience />));
  }

  return (
    <Flex justifyContent={"center"} minW={"500px"}>
      <Box>
        <Header />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Personal Information
          </AbsoluteCenter>
        </Box>
        <PersonalInformation />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Education
          </AbsoluteCenter>
        </Box>
        <Education />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Experience
          </AbsoluteCenter>
        </Box>
        <Experience handleAddExperience={handleAddExperience} />
        {experience}
        <Button colorScheme="blue" onClick={handleAddExperience}>
          Add
        </Button>
      </Box>
    </Flex>
  );
}

export default App;
