import React from 'react';
const EmployeeListComponent = (props) => {
    return(
     <React.Fragment>
     <h5>{props.empId}</h5>
     <h5>{props.empName}</h5>
     <h5>{props.empCompany}</h5>
      </React.Fragment>
    );
}
export default EmployeeListComponent;
