import React from 'react';
import OddEvenComponent from './OddEvenComponent';
const OddEvenArrayComponent = (props) => {
           return(
                <React.Fragment>
                    <div>
                        <OddEvenComponent array={['1','2','3','8','5']}/>
                    </div>
                </React.Fragment>
             );
   
}

export default OddEvenArrayComponent;
