import { useState } from "react";
import { Box, Flex, Button, Divider, AbsoluteCenter } from "@chakra-ui/react";
import "./index.css";
import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [experience, setExperience] = useState([]);

  function handleAddExperience() {
    setExperience(experience.concat(<Experience />));
  }

  return (
    <Flex
      justifyContent={"center"}
      pl={{ base: "50px", sm: "0px" }}
      pr={{ base: "50px", sm: "0px" }}
      alignItems={"center"}
    >
      <Box>
        <Header />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter
            className="test"
            bg="white"
            px="4"
            fontWeight={"semibold"}
          >
            Personal Info
          </AbsoluteCenter>
        </Box>
        <PersonalInformation />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4" fontWeight={"semibold"}>
            Education
          </AbsoluteCenter>
        </Box>
        <Education />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4" fontWeight={"semibold"}>
            Experience
          </AbsoluteCenter>
        </Box>
        <Experience handleAddExperience={handleAddExperience} />
        {experience}
        <Button
          colorScheme="blue"
          onClick={handleAddExperience}
          mt={{ base: "20px", sm: "0px" }}
          ml={{ base: "20", sm: "0px" }}
        >
          Add Experience
        </Button>
      </Box>
    </Flex>
  );
}

export default App;
