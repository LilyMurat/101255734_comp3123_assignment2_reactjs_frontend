import React, { useState } from React;
import axios from 'axios';
import { useHistory, Link} from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const EmployeeList =()=>{
    const [employees, setEmployee] = useState([]);

    let history=useHistory();
    useEffect(()=>{
        loademployees();
    },[]);

     const loademployees=async e =>{
        const result = await axios.get("/api/v1/employees");
        setEmployee(result.data.reverse());
     };

     const deleteEmployee =  async _id =>{
        let userInput=prompt('Delete? Yes/No')
        if(userInput=='Yes'||userInput=='yes'){
            await axios.delete(`/api/v1/employees/${_id}`)
            loademployees();
        }else if(userInput==null){
            loademployees();
        }
        else{
            loademployees();
        }
     };

     return(
        <div className="container py-4">
            <div className="py-4">
                <h1>Employee List</h1>
                <Link className="btn btn-success" style={{margin:20}} to="/add">Add Employee</Link>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email ID</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody> 
                        {employees.map((employee, index) => ( 
                        <tr> 
                            <th scope="row">{index + 1}</th> 
                            <td >{employee.FirstName}</td> 
                            <td >{employee.LastName}</td> 
                            <td >{employee.emailId}</td> 
                            <td> 
                            <Link className="btn btn-primary mr-2" style = {{marginRight : 10}} 
                            to={`/view/${employee._id}`}> 
                                View 
                            </Link> 
                            
                            <Link 
                                className="btn btn-secondary mr-2" 
                                to={`/update/${employee._id}`} 
                            > 
                                Update 
                            </Link> 
                            <button 
                                className="btn btn-danger" style = {{marginLeft : 10}} 
                                onClick={() => deleteEmployee(employee._id)} 
                            > 
                                Delete 
                            </button> 
                            </td> 
                        </tr> 
                        ))} 
                    </tbody>
                </table>

            </div>
        </div>
     );
};

export default Main;