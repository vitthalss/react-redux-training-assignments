import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import NameComponent from './NameComponent';
import './index.css';

ReactDOM.render(
      <section>
        <Hello />  <NameComponent />
      </section>
  ,
  document.getElementById('root')
);
