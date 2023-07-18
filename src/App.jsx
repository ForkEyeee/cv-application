import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";
import "./index.css";
import { Button } from "@chakra-ui/react";
import RenderCV from "./components/RenderCV";

function App() {
  const [experience, setExperience] = useState([]);
  const [name, setName] = useState("");

  function handleAddExperience() {
    setExperience(experience.concat(<Experience />));
  }
  return (
    <div>
      <PersonalInformation name={name} setName={setName} />
      <Education />
      <Experience handleAddExperience={handleAddExperience} />
      {experience}
      <Button colorScheme="blue">Change</Button> <RenderCV name={name} />
    </div>
  );
}

export default App;
