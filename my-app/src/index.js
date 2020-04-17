import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import NameComponent from './NameComponent';
import ProjectManagement from './ProjectManagement';
import './index.css';

ReactDOM.render(
      <section>
        <Hello />  <NameComponent /> <ProjectManagement/>
      </section>
  ,
  document.getElementById('root')
);
