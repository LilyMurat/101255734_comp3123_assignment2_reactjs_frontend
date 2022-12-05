import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    email: "",

  });
  const { id } = useParams();
  useEffect(() => {
    loadEmployee();
  }, []);
  const loadEmployee = async () => {
    const res = await axios.get(`/api/v1/employees/${id}`);
    setEmployee({
      firstname: res.data.FirstName,
      lastname: res.data.LastName,
      email : res.data.email,
      id : res.data._id
    });
  };
  return (
    <div className="App container py-4">
      <h1 className="display-4">{employee.firstname}'s profile</h1>
      <hr />
      <ul className="list-group w-40">
        <li className="list-group-item">FirstName: {employee.firstname}</li>
        <li className="list-group-item">user name: {employee.lastname}</li>
        <li className="list-group-item">email: {employee.email}</li>
      </ul><br/>
      <Link className="btn btn-primary" to="/">
        return
      </Link>
    </div>
  );
};

export default ViewEmployee;