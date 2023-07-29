import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";
import "./index.css";
import {
  HStack,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Center,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import RenderCV from "./components/RenderCV";
import Header from "./components/Header";

function App() {
  const [experience, setExperience] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    startDate: "",
    endDate: "",
  });

  function handleAddExperience() {
    setExperience(experience.concat(<Experience />));
  }
  return (
    <Flex justifyContent={"center"}>
      <Box>
        <Header />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Personal Information
          </AbsoluteCenter>
        </Box>{" "}
        <PersonalInformation
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Education
          </AbsoluteCenter>
        </Box>
        <Education education={education} setEducation={setEducation} />
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
        <RenderCV />
      </Box>
    </Flex>
  );
}

export default App;
