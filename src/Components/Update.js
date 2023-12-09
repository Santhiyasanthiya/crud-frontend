import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState();
  const [checked, setChecked] = useState(true);
 

  const navigate = useNavigate();

  const updateUser = async () => {

    await axios.put(API_URL + id, {
      firstName,
      lastName,
      checked
    });
    navigate("/read");
  };

  
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setChecked(localStorage.getItem("checked"));
  }, []);

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
      <Button onClick={updateUser}>Update</Button>
    </Form>
  );
};

export default Update;