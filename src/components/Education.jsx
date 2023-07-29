import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

function Education({ education, setEducation }) {
  return (
    <div>
      <FormControl>
        <FormLabel>School</FormLabel>
        <Input
          onChange={e => setEducation({ ...education, school: e.target.value })}
          value={education.school}
          type="text"
        />
        <FormHelperText>Enter your school's name.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Title of study</FormLabel>
        <Input
          onChange={e =>
            setEducation({ ...education, studyTitle: e.target.value })
          }
          value={education.studyTitle}
          type="text"
        />
        <FormHelperText>Enter your title of study.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Date of study</FormLabel>
        <Input
          onChange={e =>
            setEducation({ ...education, studyDate: e.target.value })
          }
          value={education.studyDate}
          type="date"
        />
        <FormHelperText>Enter your date of study.</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Education;
