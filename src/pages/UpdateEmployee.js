import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useHistory, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  let history = useHistory();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    FirstName: "",
    LastName: "",
    email: "",
  });

  const { FirstName, LastName, email} = employee;
  const onInputChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const goBack = async e =>{
    e.preventDefault();
    history.push("/");
  }
  const onSubmit = async e => {
    e.preventDefault();
    alert("Data Updated!!");
    await axios.put(`/api/v1/employees/${id}`, employee);
    history.push("/");
    
  };

  const loadEmployee = async () => {
    const result = await axios.get(`/api/v1/employees/${id}`);
    setEmployee(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="FirstName"
              value={FirstName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="LastName"
              value={LastName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-success btn-block"  style= {{marginTop : 10}}>Save</button>
          
        </form>
          <Link className="btn btn-warning btn-block"style= {{marginTop : 10}} to="/">
            return
          </Link>
      </div>
    </div>
  );
};

export default UpdateEmployee;