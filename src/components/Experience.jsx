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
} from "@chakra-ui/react";

function Experience() {
  const [workExperience, setWorkExperience] = useState({
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    startDate: "",
    endDate: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  return (
    <Flex
      spacing={6}
      maxW={{ base: "70%", sm: "100%" }}
      ml={{ base: "20", sm: "0" }}
    >
      {" "}
      <form onSubmit={handleSubmit}>
        {!isEdit ? (
          <VStack spacing={6} align="stretch">
            <FormControl isRequired>
              <FormLabel>Company Name</FormLabel>
              <Input
                onChange={e =>
                  setWorkExperience({
                    ...workExperience,
                    companyName: e.target.value,
                  })
                }
                value={workExperience.companyName}
                type="text"
                maxLength={"30"}
              />
              <FormHelperText>
                Please enter the full name of the company.
              </FormHelperText>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Position Title</FormLabel>
              <Input
                onChange={e =>
                  setWorkExperience({
                    ...workExperience,
                    positionTitle: e.target.value,
                  })
                }
                value={workExperience.positionTitle}
                type="text"
                maxLength={"30"}
              />
              <FormHelperText>
                Please enter your title at the company.
              </FormHelperText>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Main Tasks</FormLabel>
              <Input
                onChange={e =>
                  setWorkExperience({
                    ...workExperience,
                    mainTasks: e.target.value,
                  })
                }
                value={workExperience.mainTasks}
                maxLength={"50"}
              />
              <FormHelperText>
                Please enter the main tasks you performed at this job.
              </FormHelperText>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Start Date</FormLabel>
              <Input
                onChange={e =>
                  setWorkExperience({
                    ...workExperience,
                    startDate: e.target.value,
                  })
                }
                value={workExperience.startDate}
                type="date"
              />
              <FormHelperText>
                Please enter the start date of your employment.
              </FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>End Date</FormLabel>
              <Input
                onChange={e =>
                  setWorkExperience({
                    ...workExperience,
                    endDate: e.target.value,
                  })
                }
                value={workExperience.endDate}
                type="date"
              />
              <FormHelperText>
                If applicable, please enter the end date of your employment.
              </FormHelperText>
            </FormControl>
          </VStack>
        ) : (
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading size="md">Company:</Heading>
              <Text>{workExperience.companyName}</Text>
            </Box>
            <Box>
              <Heading size="md">Position Title:</Heading>
              <Text>{workExperience.positionTitle}</Text>
            </Box>
            <Box>
              <Heading size="md">Main Tasks:</Heading>
              <Text>{workExperience.mainTasks}</Text>
            </Box>
            <Box>
              <Heading size="md">Start Date:</Heading>
              <Text>{workExperience.startDate}</Text>
            </Box>
            <Box>
              <Heading size="md">End Date:</Heading>
              <Text>
                {workExperience.endDate ? workExperience.endDate : "Present"}
              </Text>
            </Box>
          </VStack>
        )}
        <Flex justifyContent={"flex-end"} marginTop={4}>
          <Button type="submit">{isEdit ? "Edit" : "Submit"}</Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default Experience;
