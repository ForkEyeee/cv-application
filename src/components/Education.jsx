import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");

  return (
    <div>
      <FormControl>
        <FormLabel>School Name</FormLabel>
        <Input
          onChange={e => setSchoolName(e.target.value)}
          value={schoolName}
          type="text"
        />
        <FormHelperText>
          Please enter the full name of the school.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Title of Study</FormLabel>
        <Input
          onChange={e => setStudyTitle(e.target.value)}
          value={studyTitle}
          type="text"
        />
        <FormHelperText>
          Enter the title of your course or field of study.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Date of Study</FormLabel>
        <Input
          onChange={e => setStudyDate(e.target.value)}
          value={studyDate}
          type="text"
        />
        <FormHelperText>
          Enter the time period of your study (e.g., 2019-2023).
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default Education;
