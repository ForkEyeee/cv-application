import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

function Experience({ handleAddExperience }) {
  const [workExperience, setWorkExperience] = useState({
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    startDate: "",
    endDate: "",
  });
  const [isEdit, setisEdit] = useState(false);

  return (
    <div>
      <FormControl>
        <FormLabel>Company Name</FormLabel>
        <Input
          onChange={e =>
            setWorkExperience(prevState => ({
              ...prevState,
              companyName: e.target.value,
            }))
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
            setWorkExperience(prevState => ({
              ...prevState,
              positionTitle: e.target.value,
            }))
          }
          value={workExperience.positionTitle}
          type="text"
        />
        <FormHelperText>Please enter your title at the company.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Main Tasks</FormLabel>
        <Input
          onChange={e =>
            setWorkExperience(prevState => ({
              ...prevState,
              mainTasks: e.target.value,
            }))
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
            setWorkExperience(prevState => ({
              ...prevState,
              startDate: e.target.value,
            }))
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
            setWorkExperience(prevState => ({
              ...prevState,
              endDate: e.target.value,
            }))
          }
          value={workExperience.endDate}
          type="date"
        />
        <FormHelperText>
          If applicable, please enter the end date of your employment.
        </FormHelperText>
      </FormControl>
      {isEdit ? (
        <Button onClick={() => setisEdit(!isEdit)}>Edit</Button>
      ) : (
        <Button onClick={() => setisEdit(!isEdit)}>View</Button>
      )}
    </div>
  );
}

export default Experience;
