import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

function Experience({ handleAddExperience }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainTasks, setMainTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div>
      <FormControl>
        <FormLabel>Company Name</FormLabel>
        <Input
          onChange={e => setCompanyName(e.target.value)}
          value={companyName}
          type="text"
        />
        <FormHelperText>
          Please enter the full name of the company.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Position Title</FormLabel>
        <Input
          onChange={e => setPositionTitle(e.target.value)}
          value={positionTitle}
          type="text"
        />
        <FormHelperText>Please enter your title at the company.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Main Tasks</FormLabel>
        <Input
          onChange={e => setMainTasks(e.target.value)}
          value={mainTasks}
          type="text"
        />
        <FormHelperText>
          Please enter the main tasks you performed at this job.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Start Date</FormLabel>
        <Input
          onChange={e => setStartDate(e.target.value)}
          value={startDate}
          type="date"
        />
        <FormHelperText>
          Please enter the start date of your employment.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>End Date</FormLabel>
        <Input
          onChange={e => setEndDate(e.target.value)}
          value={endDate}
          type="date"
        />
        <FormHelperText>
          If applicable, please enter the end date of your employment.
        </FormHelperText>
      </FormControl>
      <Button colorScheme="blue" onClick={handleAddExperience}>
        Add
      </Button>
    </div>
  );
}

export default Experience;
