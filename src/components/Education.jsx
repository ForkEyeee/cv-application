import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  VStack,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";

function Education() {
  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    startDate: "",
    endDate: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  return (
    <form onSubmit={handleSubmit}>
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
              maxLength={"50"}
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>Enter the name of the school</FormHelperText>
            </Box>
          </FormControl>

          <FormControl>
            <FormLabel>Title of study</FormLabel>
            <Input
              onChange={e =>
                setEducation({ ...education, studyTitle: e.target.value })
              }
              value={education.studyTitle}
              type="text"
              maxLength={"30"}
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>
                Enter the title of your field of study
              </FormHelperText>
            </Box>
          </FormControl>

          <FormControl>
            <FormLabel>Start Date</FormLabel>
            <Input
              onChange={e =>
                setEducation({ ...education, startDate: e.target.value })
              }
              value={education.startDate}
              type="date"
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>
                Enter the date you started this study
              </FormHelperText>
            </Box>
          </FormControl>

          <FormControl>
            <FormLabel>End Date</FormLabel>
            <Input
              onChange={e =>
                setEducation({ ...education, endDate: e.target.value })
              }
              value={education.endDate}
              type="date"
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>
                Enter the date you completed this study
              </FormHelperText>
            </Box>
          </FormControl>
        </div>
      ) : (
        <VStack align="center">
          <Box>
            <Text fontWeight="bold">School:</Text>
            <Text>{education.school}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Title of study:</Text>
            <Text>{education.studyTitle}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Start Date:</Text>
            <Text>{education.startDate}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">End Date:</Text>
            <Text>{education.endDate}</Text>
          </Box>
        </VStack>
      )}
      <Flex justifyContent={"flex-end"}>
        <Button type="submit">{isEdit ? "Edit" : "Submit"}</Button>
      </Flex>
    </form>
  );
}

export default Education;
