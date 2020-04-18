import React from 'react';
const CustomerComponent = (props) => {

var jsonarr = [ 
    { 
        id: 1, 
        name: "Anil",
        address:"India"
    }, 
    { 
        id: -19, 
        name: "john",
        address:"America"
        
    }, 
    { 
        id: 20, 
        name: "Amik",
        address:"India"
    }, 
    { 
        id: -10, 
        name: "jack",
        address:"China"
    }, 
    { 
        id: 25, 
        name: "Akshay",
        address:"India"
    }, 
    { 
        id: "not a number", 
        name: "jimmy",
        address:"India"
    }, 
    { 
        id: null, 
        name: "jeff",
        address:"America"
    }, 
] 
  
var result = jsonarr.filter(customer => customer.name.match(/^A/) && customer.address.match(/^India/) ); 
  
console.log(result); 
for (const [key, value] of Object.entries(result)) {
  console.log(key, value);
  alert("Filtered customer object::"+value.id+"-"+value.name+"-"+value.address);
}


    return(
     <React.Fragment>
        <div  className="Hello">
         <h1 className="textstyle">Q5: Customer Object</h1>
         <h5>Filtered customer object shown on alert message.</h5>
        </div>
    </React.Fragment>
    );
 
}
export default CustomerComponent;
