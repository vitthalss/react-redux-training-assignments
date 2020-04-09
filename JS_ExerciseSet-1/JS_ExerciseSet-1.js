/*
Exercise-1
Create a function that takes an array of numbers and return both the minimum and
maximum numbers, in that order.
Example:
Function Call : minMax([3, 2, 1, 5, 4])
O/P ➞ [1, 5]
*/

var arr = [3, 2, 1, 5, 4];

console.log("Exercise-1 Output:"); minMax(arr);

function minMax(array) {
  var output = [];
  var min = array[0];
   var max = array[0];
  for (var i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
  }
   output.push(min);output.push(max);
   console.log(output);
  return output;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Exercise-2
Create a function that takes an array of numbers and strings and return a new array
without the strings.
Example:
Function Call : filterArray([1, "a", "b", 0, 15])
O/P ➞ [1,0,5]
*/

var arrOfNumAndStr = [1, "a", "b", 0, 15];
console.log("Exercise-2 Output:");filterArray(arrOfNumAndStr)

function filterArray(arrOfNumAndStr){
   arrOfNumAndStr = arrOfNumAndStr.filter(e => e !== 'a' && e !== 'b');
   console.log(arrOfNumAndStr);
   return arrOfNumAndStr;
 }

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Exercise-3
Create a function that takes an array of students and returns an array of student names.
Example:
Function Call : getStudentNames([{name: "Steve"},
{ name: "Mike" },
{ name: "John" }])
O/P ➞ ["Steve", "Mike", "John"]
*/
var arrOfStudents = [{name: "Steve"},
                    { name: "Mike" },
                    { name: "John" }];
                    
console.log("Exercise-3 Output:");getStudentNames(arrOfStudents);

function getStudentNames(arrOfStudents){
  var output = [];
  for(var i in arrOfStudents){
    output.push(arrOfStudents[i].name);
 }
  console.log(output);
  return output;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

Exercise-4
Write a function that returns true if a object contains the specified key,
and false otherwise.
Example:
Function Call : hasKey({ a: 44, b: 45, c: 46 }, "d")
O/P ➞ false (As “d” not present)

*/

var arrOfSpecifiedKeyValue = {a: 44, b: 45, c: 46};
var key = "d";
console.log("Exercise-4 Output:"+hasKey(arrOfSpecifiedKeyValue,key));

function hasKey(arrOfSpecifiedKeyValue, key){
  for(var i in arrOfSpecifiedKeyValue){
    if(key===i){
      return true;
    }
  }
  return false;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Exercise-5 

Create a form to accept the First name and Last name from user and display Full name by invoking function on button click.
Write a JavaScript function to converts the first letter of each name in upper case and to do the concatenation.

Example: 
First name : Ram
Last name : Sharma
Full name : Ram Sharma
*/


/*
<html>
<head>
<script type="text/javascript">
  displayName = function() {
    var first = document.getElementById("firstname").value;
    var second = document.getElementById("lastname").value;
    document.getElementById("fullname").innerHTML = first+" "+second;
}

</script>
</head>
<body>
First name:<br>
<input type="text" name="firstname" id='firstname'>
<br>
Last name:<br>
<input type="text" name="lastname" id='lastname'>
<br>
<input type="button" value="Send" onclick="displayName()">
<div>
  <label>Full Name : </label> <label id="fullname"> </label> 
</div> 
<body>
</html>

*/
 /*
 Exercise-3 Output#

 Full Name : Ram Sharma
 */
