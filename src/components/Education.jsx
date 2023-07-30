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
  Heading,
  Container,
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
    <Container maxW="container.lg">
      <form onSubmit={handleSubmit}>
        {!isEdit ? (
          <VStack spacing={6} align="stretch">
            <FormControl isRequired>
              <FormLabel>School</FormLabel>
              <Input
                onChange={e =>
                  setEducation({ ...education, school: e.target.value })
                }
                value={education.school}
                type="text"
                maxLength={"50"}
              />
              <FormHelperText>Enter the name of the school.</FormHelperText>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Title of study</FormLabel>
              <Input
                onChange={e =>
                  setEducation({ ...education, studyTitle: e.target.value })
                }
                value={education.studyTitle}
                type="text"
                maxLength={"30"}
              />
              <FormHelperText>
                Enter the title of your field of study.
              </FormHelperText>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Start Date</FormLabel>
              <Input
                onChange={e =>
                  setEducation({ ...education, startDate: e.target.value })
                }
                value={education.startDate}
                type="date"
              />
              <FormHelperText>
                Enter the date you started this study.
              </FormHelperText>
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
              <FormHelperText>
                If applicable, please enter the date you completed this study.
              </FormHelperText>
            </FormControl>
          </VStack>
        ) : (
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading size="md">School:</Heading>
              <Text>{education.school}</Text>
            </Box>
            <Box>
              <Heading size="md">Title of study:</Heading>
              <Text>{education.studyTitle}</Text>
            </Box>
            <Box>
              <Heading size="md">Start Date:</Heading>
              <Text>{education.startDate}</Text>
            </Box>
            <Box>
              <Heading size="md">End Date:</Heading>
              <Text>{education.endDate ? education.endDate : "Present"}</Text>
            </Box>
          </VStack>
        )}
        <Flex justifyContent={"flex-end"} marginTop={4}>
          <Button type="submit">{isEdit ? "Edit" : "Submit"}</Button>
        </Flex>
      </form>
    </Container>
  );
}

export default Education;
