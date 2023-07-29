import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";

function Education({ education, setEducation }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {!isEdit ? (
        <div>
          <FormControl>
            <FormLabel>School</FormLabel>
            <Input
              onChange={e =>
                setEducation({ ...education, school: e.target.value })
              }
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
      ) : (
        <VStack>
          <Text>{education.school}</Text>
          <Text>{education.studyTitle}</Text>
          <Text>{education.studyDate}</Text>
        </VStack>
      )}
      <Button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "Edit" : "View"}
      </Button>
    </div>
  );
}

export default Education;
