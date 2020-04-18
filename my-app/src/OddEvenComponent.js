import React from 'react';
import OddEvenArrayComponent from './OddEvenArrayComponent';
const OddEvenComponent = (props) => {
        var arrays = [props.array];
        var arr = ['1','2','3','8','5'];
        var result = arr.map(function (x) {
          return parseInt(x); 
        });

        arrays = result;
        console.log(result);
        
        var odd =[]; var even =[];
           arrays.map((numbers)=>{
                 if(numbers%2!==0){
                     odd.push(`${numbers}`);
                
                 } else {
                    even.push(`${numbers}`);

                }
             });
                return(
                         <React.Fragment>
                           <div  className="Hello">
                              <h1 className="textstyle">Q4: Odd/Even </h1><br/>
                              <h5> list of odd even numbers: {arrays.map(x => x+"   ")}  </h5>
                              <h5> odd: {odd.map(x =>  x+"   ")}  </h5>
                              <h5> even: {even.map(x =>  x+"  ")} </h5>
                           </div>
                        </React.Fragment>
                    );
   
}

export default OddEvenComponent;
