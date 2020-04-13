## react-redux-training-assignments

# ----------------------------------------------------------------

### JS_ExerciseSet-1 : 

 ```
..\JS_ExerciseSet-1>node JS_ExerciseSet-1.js
```
 
#### Exercise-1 

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Example:

Function Call : minMax([3, 2, 1, 5, 4]) 

O/P ➞ [1, 5]

#### Exercise-2 

Create a function that takes an array of numbers and strings and return a new array without the strings.

Example:

Function Call : filterArray([1, "a", "b", 0,15])

O/P ➞ [1,0,5]

#### Exercise-3 

Create a function that takes an array of students and returns an array of student names.

Example:

Function Call : getStudentNames([{ name: "Steve" },
                             { name: "Mike" },
                             { name: "John" }])
                             

O/P ➞ ["Steve", "Mike", "John"]

#### Exercise-4 

Write a function that returns true if a object contains the specified key, and false otherwise.

Example:

Function Call : hasKey({ a: 44, b: 45, c: 46 }, "d")

O/P ➞ false  (As “d” not present)


#### Exercise-5 

Create a form to accept the First name and Last name from user and display Full name by invoking function on button click.
Write a JavaScript function to converts the first letter of each name in upper case and to do the concatenation.

Example: 

First name : Ram

Last name :  Sharma

O/P ➞ Full name : Ram Sharma

# ----------------------------------------------------------------

### JS_ExerciseSet-2 : 
```
..\JS_ExerciseSet-2>node JS_ExerciseSet-2.js
```
#### 1. Exercise on Control statement

Create a sample application in JavaScript to find out a number is Prime or  not.

#### 2. Exercise on Object

Create a sample application in JavaScript which print True if object contains the key = “status” and value = “complete” otherwise print False.

(Hint:  Create project object with keys (id , name , description , status) ) 

#### 3. Exercise on Array

Create a sample application in JavaScript to find out a project based on their id’s and print it’s name and description.

(Hint:  Create array of objects where each object contains project details (id , name , description) )

#### 4. Exercise on Functions

Create a sample application in JavaScript to perform the following task on list of Project object.

###### 1.      Add new project object in existing list.

###### 2.     Update the status of particular project object (InProgress to Completed).

###### 3.     Delete a particular project object.

(Hint:  Create array of objects where each object contains project details (id , name , status) also create separate function for each operation )

Sample Object → { pid : 101 , pname : ‘RMS’ , status : ‘InProgress’ }

# ----------------------------------------------------------------
### JS_ExerciseSet-3 : 
```
..\JS_ExerciseSet-2>node JS_ExerciseSet-3.js
```
#### 1. Exercise on DOM manipulation

Create a sample application in JavaScript to perform the following task on list of Project object.

- Accept the Project details(id, name, description, status) from user and create a list of Project Object

- On click of “View Project List” button display all records in a tabular format.
  Note : Create a dynamic table on click event using document object and loop
  
- Verify total number of  < tr > tag and size of the list is equal or not and print the message accordingly on click of “CHECK” button.
  Note :  count <tr> tag using document object only 
 
#### 2. Exercise on ES6 

The objective of this challenge is to create a console Object. You should write three working functions inside MyConsole class to complete this challenge:

- Create a log() function that takes user arguments and returns them as a string.

- Create a history() function that takes an optional range as an argument.

- Create a clearHistory() function to remove the history memory.

``` 
Example:

myconsole.log(123) o/p:--> “123”

myconsole.log(true) o/p:--> “true”

myconsole.log({name : Ram})  o/p:--> “{name : Ram}”

myconsole.history() o/p:--> “123\n true\n {name : Ram}”

myconsole.history(1) o/p:--> “123”

myconsole.history(2) o/p:--> “123\n true”

myconsole.clearHistory() o/p:--> true

myconsole.history() o/p:--> “”

```


# ----------------------------------------------------------------
