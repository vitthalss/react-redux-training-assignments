import React from 'react';
import EmployeeListComponent from './EmployeeListComponent';

class EmployeeComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      empId: '',
      empName: '',
      empCompany: ''
    };
  }

 changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "empId") {
      if (!Number(val)) {
        alert("Employee id must be a number.");
      }
    }
    this.setState({[nam]: val});
  }

 render() {
    return (
    
           <form className="center">
            <div>
                <div>
                    <h1 className="textstyle">Q3: Employee Details </h1><br/>
                    Enter Employee Id : <input type="text" name="empId"  onChange={this.changeHandler} placeholder="Emp Id"  ref={node => (this.inputNode = node)}/><br/><br/>
                    Enter Employee Name : <input type="text" name="empName"  onChange={this.changeHandler}  placeholder="Emp Name"   ref={node => (this.inputNode = node)}/><br/><br/>
                    Enter Employee Company : <input className="border" type="text" name="empCompany"  onChange={this.changeHandler}  placeholder="Emp Company" disabled value={this.props.EmpCompany}   ref={node => (this.inputNode = node)}/><br/><br/>
                   
                    <EmployeeListComponent empId={this.state.empId}/>
                    <EmployeeListComponent empName={this.state.empName}/>
                    <EmployeeListComponent empCompany={this.props.EmpCompany}/>
                    <br/><br/>
                </div>
            </div>
          </form>

    );
  }
}

EmployeeComponent.defaultProps = {
  EmpCompany: 'YASH Technologies'
};

export default EmployeeComponent;
