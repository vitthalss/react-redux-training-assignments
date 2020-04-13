/*
1. Exercise on DOM manipulation
Create a sample application in JavaScript to perform the following task on list of Project object.
  1. Accept the Project details(id, name, description, status) from user and create a list of Project Object
  2. On click of “View Project List” button display all records in a tabular format.
     Note : Create a dynamic table on click event using document object
  3. Verify total number of  < tr > tag and size of the list is equal or not and print the message accordingly on click of “CHECK” button.
     Note :  count <tr> tag using document object only.
*/

/*

<!DOCTYPE html> 
<html> 

<head> 
	<title> 
		1. Exercise on DOM manipulation
    Create a sample application in JavaScript to perform the following task on list of Project object.
      1. Accept the Project details(id, name, description, status) from user and create a list of Project Object
      2. On click of “View Project List” button display all records in a tabular format.
         Note : Create a dynamic table on click event using document object and loop
      3. Verify total number of  < tr > tag and size of the list is equal or not and print the message accordingly on click of “CHECK” button.
         Note :  count <tr> tag using document object only.
	</title> 
	<style>
		table, td, th {
		border: 1px solid black;
		}
		th {
		background: grey;
		}
	</style>
	<script type="text/javascript"> 
	  
		var obj = {
	   	listOfObjects : [],
        id : "",
        name : "", 
        description : "", 
        status : "",
		setFormValues : function() {
          	obj.id = document.forms[0].elements['id'].value; 
			obj.name = document.forms[0].elements['objname'].value; 
			obj.description = document.forms[0].elements['description'].value; 
			obj.status = document.forms[0].elements['status'].value; 
			console.log("status:"+document.forms[0].elements['status'].value);
        },
		createFunction : function() {
			this.setFormValues();
			var table = document.getElementById("myTable");
			var head = table.createTHead();
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = obj.id;
			cell2.innerHTML = obj.name;
			cell3.innerHTML = obj.description;
			cell4.innerHTML = obj.status;
		},
		countTrElements: function () {
			var x = document.getElementById("myTable").rows.length;
			document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
		}
    }
	</script> 
</head> 

<body onload="obj.createTableHeader();"> 

		<h1>1. Exercise on DOM manipulation</h1> 
		
		<h4>
      Create a sample application in JavaScript to perform the following task on list of Project object.<br>
         1. Accept the Project details(id, name, description, status) from user and create a list of Project Object<br>
         2. On click of “View Project List” button display all records in a tabular format.<br>
            Note : Create a dynamic table on click event using document object and loop<br>
         3. Verify total number of  < tr > tag and size of the list is equal or not and print the message accordingly on click of “CHECK” button.<br>
            Note :  count <tr> tag using document object only.
    </h4> 
		
		<hr color="Orange"> 
		
		<form name="projectForm"> 
			Enter the id: 
			<input type="text" name=id value=""> 
			
			<br><br> 
			Enter the name: 
			<input type="text" name=objname value=""> 
			
			<br><br> 
			Enter the description: 
			<input type="text" name=description value=""> 
			
			<br><br> 
			Enter the status: 
			<input type="text" name=status value=""> 
			
			<br><br> 
			<input type="button" value="View Project List" onClick="obj.createFunction()">  
			<br><br> 
			<table id="myTable">
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Description</th>
				<th>Status</th>
			</tr>
			</table>
			<br><br> 
			<input type="button"  value="Check"  onclick="obj.countTrElements()">
			<br/>
			<p id="demo"></p>
			<input type="text" disabled style="border: none;background: white; width: 100%" name=message id="message" value=""> 
		</form> 
</body> 

</html> 

*/



/*
2. Exercise on ES6 
The objective of this challenge is to create a console Object. You should write three working functions inside MyConsole class to complete this challenge:
* Create a log() function that takes user arguments and returns them as a string.
* Create a history() function that takes an optional range as an argument.
* Create a clearHistory() function to remove the history memory.

Example:
myconsole.log(123) o/p:--> “123”
myconsole.log(true) o/p:--> “true”
myconsole.log({name : Ram})  o/p:--> “{name : Ram}”
myconsole.history() o/p:--> “123\n true\n {name : Ram}”
myconsole.history(1) o/p:--> “123”
myconsole.history(2) o/p:--> “123\n true”
myconsole.clearHistory() o/p:--> true
myconsole.history() o/p:--> “”

Notes
The history function:


*/

class MyConsole{

  constructor(){}

  log(arg){
    var  value =  arg +"";
       return value;
  }
  history(){
    var  value =  arg +"";
    return value;
  }
}
var myconsole=new MyConsole();
myconsole.log(123);
myconsole.log(true);
myconsole.log('{name : Ram}') ;
