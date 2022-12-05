import React, { useState } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";

const AddEmployee = () => {
  let history = useHistory();
  const [employee, setEmployee] = useState({
    FirstName: "",
    LastName: "",
    email: "",  
  });

  const { FirstName, LastName, email} = employee;
  const onInputChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("/api/v1/employees", employee);
    history.push("/");
  };
  return (
    <div className="container py-4">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <p>First Name : </p>
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
            <p>Last Name : </p>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your LastName"
              name="LastName"
              value={LastName}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <p>Email : </p>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block" style= {{marginTop : 10}}>Add Employee</button>
          <Link className="btn btn-danger"style= {{marginTop : 10 , marginLeft : 10}} to="/">Cancel</Link>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;