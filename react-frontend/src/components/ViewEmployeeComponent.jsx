import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props){
        super(props)
   
           this.state ={
            id: 3,
            firstName : '',
            lastName : '',
            emailId : '' ,
              employees: []
           }
   
  
   }


   componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id)
    .then(res=>{
   this.setState({employees: res.data});
    
    });
}


    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                <h3 className="text-center" >View Employee Details</h3>
                <div className="row">
             <label>Employee First Name: </label>
             <div> {this.state.employees.firstName}</div>
              </div>

              <div className="row">
             <label>Employee Last Name: </label>
             <div> {this.state.employees.lastName}</div>
               </div>


               <div className="row">
             <label>Employee Email id : </label>
             <div> {this.state.employees.emailId}</div>
               </div>
               </div>
               </div>
        );
    }
}

export default ViewEmployeeComponent;