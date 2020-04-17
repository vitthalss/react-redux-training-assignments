import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import NameComponent from './NameComponent';
import ProjectManagement from './ProjectManagement';
import EmployeeComponent from './EmployeeComponent';
import EmployeeListComponent from './EmployeeListComponent';
import './index.css';


ReactDOM.render(
      <section>
        <Hello/> <NameComponent/> <ProjectManagement/> <EmployeeComponent/> <EmployeeListComponent/>
      </section>
  ,
  document.getElementById('root')
);
