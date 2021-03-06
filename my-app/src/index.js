import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import NameComponent from './NameComponent';
import ProjectManagement from './ProjectManagement';
import EmployeeComponent from './EmployeeComponent';
import EmployeeListComponent from './EmployeeListComponent';
import OddEvenArrayComponent from './OddEvenArrayComponent';
import CustomerComponent from './CustomerComponent';
import RouterComponent from './RouterComponent';
import './index.css';

ReactDOM.render(
      <section>
        <Hello/> <NameComponent/> <ProjectManagement/>
        <RouterComponent/>
        <EmployeeComponent/> <EmployeeListComponent/>
        <OddEvenArrayComponent/> <CustomerComponent/>
      </section>
      ,
      document.getElementById('root')
    );
