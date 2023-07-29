import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Text,
  VStack,
  Box,
  Flex,
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
            <FormLabel>Start Date</FormLabel>
            <Input
              onChange={e =>
                setEducation({ ...education, startDate: e.target.value })
              }
              value={education.startDate}
              type="date"
            />
            <FormHelperText>Enter your date of study.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>End Date</FormLabel>
            <Input
              onChange={e =>
                setEducation({ ...education, endDate: e.target.value })
              }
              value={education.endDate}
              type="date"
            />
            <FormHelperText>Enter your date of study.</FormHelperText>
          </FormControl>
        </div>
      ) : (
        <VStack align="start">
          <Box>
            <Text fontWeight="bold">School:</Text>
            <Text>{education.school}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Title of study:</Text>
            <Text>{education.studyTitle}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Date of study:</Text>
            <Text>{education.studyDate}</Text>
          </Box>
        </VStack>
      )}
      <Flex justifyContent={"flex-end"}>
        <Button onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Edit" : "Submit"}
        </Button>
      </Flex>
    </div>
  );
}

export default Education;
