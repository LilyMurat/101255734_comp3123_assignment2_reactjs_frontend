import React from 'react';
import './App.css';
import { Switch } from 'react-native';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import ViewEmployee from "./pages/ViewEmployee";

import{ 
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={EmployeeList}/>
          <Route exact path="/view/:id" component={ViewEmployee}/>
          <Route exact path="/update/:id" component={UpdateEmployee}/>
          <Route exact path="/add" component={AddEmployee}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
