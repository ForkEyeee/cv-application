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

  return (
    <div>
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
            />
            <FormHelperText>
              Please enter the full name of the company.
            </FormHelperText>
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
            />
            <FormHelperText>
              Please enter your title at the company.
            </FormHelperText>
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
              type="text"
            />
            <FormHelperText>
              Please enter the main tasks you performed at this job.
            </FormHelperText>
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
        </div>
      ) : (
        <VStack>
          <Text>Company: {workExperience.companyName}</Text>
          <Text>Title: {workExperience.positionTitle}</Text>
          <Text>Tasks: {workExperience.mainTasks}</Text>
          <Text>Start Date: {workExperience.startDate}</Text>
          <Text>End Date: {workExperience.endDate}</Text>
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

export default Experience;
