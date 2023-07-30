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
    <form onSubmit={handleSubmit}>
      {!isEdit ? (
        <div>
          <FormControl>
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
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>
                Please enter the full name of the company.
              </FormHelperText>
            </Box>
          </FormControl>

          <FormControl>
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
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>
                Please enter your title at the company.
              </FormHelperText>
            </Box>
          </FormControl>

          <FormControl>
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
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>
                Please enter the main tasks you performed at this job.
              </FormHelperText>
            </Box>
          </FormControl>

          <FormControl>
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
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>
                Please enter the start date of your employment.
              </FormHelperText>
            </Box>
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
              isRequired
            />
            <Box pb={4}>
              <FormHelperText>
                If applicable, please enter the end date of your employment.
              </FormHelperText>
            </Box>
          </FormControl>
        </div>
      ) : (
        <VStack align="center">
          <Box>
            <Text fontWeight="bold">Company:</Text>
            <Text>{workExperience.companyName}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Position Title:</Text>
            <Text>{workExperience.positionTitle}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Main Tasks:</Text>
            <Text>{workExperience.mainTasks}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Start Date:</Text>
            <Text>{workExperience.startDate}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">End Date:</Text>
            <Text>{workExperience.endDate}</Text>
          </Box>
        </VStack>
      )}
      <Flex justifyContent={"flex-end"}>
        <Button type="submit">{isEdit ? "Edit" : "Submit"}</Button>
      </Flex>
    </form>
  );
}

export default Experience;
