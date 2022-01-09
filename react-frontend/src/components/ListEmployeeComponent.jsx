import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class ListEmployeeComponent extends Component {

constructor(props){
     super(props)

        this.state ={
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
}

viewEmployee(id){
    console.log("hi id is for view"+id );
   // this.props.history.push(`/view-employee/${id}`)

}


editEmployee(id){
    console.log("hi id is"+id );
    this.props.history.push(`/update-employee/${id}`)

}

deleteEmployee(id){
    console.log("hi id is"+id );
    EmployeeService.deleteEmployee(id)
    .then(res=>{
      this.setState({employees:this.state.employees.filter(employees=>employees.id !== id)});

    });
    console.log("deleted id is"+this.state.employees );
   // this.props.history.push(`/delete-employee/${id}`)

}

addEmployee(){
    console.log("hi"+this.props.history );
     this.props.history.push("/add-employee");
   }

componentDidMount() {
EmployeeService.getEmployees()
.then(res=>{
    this.setState({employees: res.data});
});

}



render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>  Add Employee</button>
                </div>
                <div className="row">
                  <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee email id</th>
                            <th> Action</th>
                        </tr>
                    </thead>


                    <tbody>
                    {
                        this.state.employees.map(
                            employee => 
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <button className="btn btn-info" onClick={() =>this.editEmployee(employee.id)}>Update</button>
                                <button style={{margingLeft:"10px"}} className="btn btn-danger" onClick={() =>this.deleteEmployee(employee.id)}>Delete</button>
                                <button style={{margingLeft:"10px"}} className="btn btn-info" onClick={() =>this.viewEmployee(employee.id)}>View</button>
                            </tr>
                        )

                    }
                    </tbody>
                 </table>

                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;