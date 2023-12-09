import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const updateUser = ({firstName,lastName,checked,id}) => {
    localStorage.setItem('id', id)
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('checked',checked)

    navigate("/update");
  };
 
  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);
    callGetAPI();
  };
  const callGetAPI = async () => {
    const resp = await axios.get(API_URL);
    setApiData(resp.data);
  };

  useEffect(() => {
    callGetAPI();
  }, []);
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.Cell>FirstName</Table.Cell>
          <Table.Cell>LastName</Table.Cell>
          <Table.Cell>Checked</Table.Cell>
          <Table.Cell>Delate</Table.Cell>
          <Table.Cell>Update</Table.Cell>
        </Table.Row>
      </Table.Header>
      
      <Table.Body>
        {apiData.map((data) => (
          <Table.Row key={data.id}>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>{data.checked ? "checked" : "notChecked"}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => deleteUser(data.id)}>Delete</Button>
            </Table.Cell>

            <Table.Cell>
              <Button onClick={() => updateUser(data)}>Update</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Read;