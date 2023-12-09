import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios  from "axios";
import { API_URL } from "../Constants/URL";
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(true);

  const navigate = useNavigate()

  const postData =async () => {
   
 await axios.post(API_URL,{
    firstName,
    lastName,
    checked
  })
  navigate('/read')
  };


  return (
    <Form className="form">
      <Form.Field>
        <label>FirstName</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter FirstYour Name"
        />
      </Form.Field>
      <Form.Field>
        <label>LastName</label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Enter LastYour Name"
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          label="Agree terms and Condition"
        />
      </Form.Field>
      <Button onClick={postData}>Submit</Button>
    </Form>
  );
};

export default Create;