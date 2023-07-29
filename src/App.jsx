import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";
import "./index.css";
import { Button } from "@chakra-ui/react";
import RenderCV from "./components/RenderCV";

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
    studyDate: "",
  });

  function handleAddExperience() {
    setExperience(experience.concat(<Experience />));
  }
  return (
    <div className="flex">
      <div className="flex-1">
        <PersonalInformation
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Education education={education} setEducation={setEducation} />
        {/* <Experience handleAddExperience={handleAddExperience} />
        {experience}
        <Button colorScheme="blue">Change</Button> */}
      </div>
      <div>
        <RenderCV />
      </div>
    </div>
  );
}

export default App;
