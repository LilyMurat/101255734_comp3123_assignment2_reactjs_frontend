import React, { useState } from React;
import axios from 'axios';
import { useHistory, Link} from "react-router-dom";

const AddEmployee = () => {
    let history = useHistory();
    const [employee, setEmployee] = useState({
        FirstName:"",
        LastName:"",
        emailId:"",
    });

const {FirstName, LastName, emailId} = employee;
const onInputChange = e => {
    setEmployee({...employee, [e.target.name]: e.target.value});
};

const onSubmit = async e =>{
    e.preventDefault();
    await axios.post("/api/v1/employees",employee);
    history.pushState("/");
};
return(
    <div className="container py-4">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add Employee</h2>
            <from onSubmit={e =>onSubmit(e)}>
                <div className="form-group">
                    <p>First Name: </p>
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
                    <p>Last Name: </p>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="LastName"
                            value={LastName}
                            onChange={e => onInputChange(e)}
                        />
                </div>

                <div className="form-group">
                    <p>Email ID: </p>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="emailId"
                            value={emailId}
                            onChange={e => onInputChange(e)}
                        />
                </div>
                <button className="btn btn-primary btn-block" style={{marginTop: 10}}>Add Employee</button>
                <Link className="btn btn-danger" style={{marginTop: 10, marginLeft: 10}} to="/">Cancel</Link>
            </from>
        </div>
    </div>
)
};

export default AddEmployee;

