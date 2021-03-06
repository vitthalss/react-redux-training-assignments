**react-redux-training-assignments**

``` ---------------------------------------------------------------------------------------------------------------------- ```

> List of assignments:

- JS_ExerciseSet-1
  - JS_ExerciseSet-1
- JS_ExerciseSet-2
  - JS_ExerciseSet-2
- JS_ExerciseSet-3
  - JS_ExerciseSet-3
- REACT JS ASSIGNMENT-I
  - my-app
- REACT JS ASSIGNMENT-II
  - my-app
  - react-redux-registration-login
  - increment-and-decrement-counter


``` ---------------------------------------------------------------------------------------------------------------------- ```
> How to run 'my-app'?

```
...\>cd my-app
...\my-app>npm install
...\my-app>npm start
```

> How to run 'react-redux-registration-login'?

```
...\>cd react-redux-registration-login
...\react-redux-registration-login>npm install
...\react-redux-registration-login>npm start
```

> How to run 'increment-and-decrement-counter'?

```
...\>cd increment-and-decrement-counter
...\increment-and-decrement-counter>npm install
...\increment-and-decrement-counter>npm start
```


``` ---------------------------------------------------------------------------------------------------------------------- ```

> JS_ExerciseSet-1 : 

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

``` ---------------------------------------------------------------------------------------------------------------------- ```

> JS_ExerciseSet-2 : 
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

``` ---------------------------------------------------------------------------------------------------------------------- ```

> JS_ExerciseSet-3 : 
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


Notes
* The history function:
* If no argument was passed to history function all history will be shown.
* Each history lines (with and without range) have newline at the end except last line.

```


``` ---------------------------------------------------------------------------------------------------------------------- ```


> REACT JS ASSIGNMENT-I


```
npx create-react-app my-app
cd my-app
npm install --save react-router-dom
npm start
```

> Q1).Create an UI which displays Hello your name in one component and returns the output into another component .

(Topics covered in this questions are-components, component injection).


> Q2).Create a logo for the project management system in the following manner.

(Topics covered in this question are-components, component injection, Embedding Html and CSS in component).


> Q3).Create a React demo to display employee details as EmpId, EmpName, and EmpCompany.Here EmpCompany should be accepted as default value and should get print by default and also need to validate EmpId.

(Topics covered in this question are-components, props, Default Props, Prop Types).

> Q4).Create a React demo to create an array of numbers and listing all even and odd numbers from the list.

(Topics covered in this question are-components, props, map function).


> Q5).Create an array of objects with CustomerID, CustomerName, and CustomerAddress.Extract Customer names starting with ’A’ and Customer address with India.

(Topics covered in this question are-components, filter method).


``` ---------------------------------------------------------------------------------------------------------------------- ```


> REACT JS ASSIGNMENT-II


> Q6). Create an Application which implements Login and Registration functionality.


-    LoginForm has two fields: username name and password if username and password is correct and the user clicks on the login button then the user should be moved to Admin Dashboard.
-    If user is not registered then he should get appropriate error message
-    If a user clicks on the Register button he should be moved to the registration page where he needs to fill the first name lastname username and password for registration.

 
(Topics covered in these question are-components, props, state, event handling, Routing).

 
> Q7).Create an counter application to show Increment button and decrement button to increase or decrease number on respective button click

(Topics covered in these question are-components, state, event handling).


> Q8).Create an application which should display Home page, About page and Contact page on click. Application show respective links for navigation in the app.

(Topics covered in these question are-components, Router, links, route).


``` ---------------------------------------------------------------------------------------------------------------------- ```
