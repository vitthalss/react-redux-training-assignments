/*
1. Exercise on Control statement
Create a sample application in JavaScript to find out a number is Prime or  not.
>>
check-prime-or-not.html
*/

/*
2. Exercise on Object
Create a sample application in JavaScript which print True if object contains the key = “status” and value = “complete” otherwise print False.
(Hint:  Create project object with keys (id , name , description , status) ) 
>>
object-status-complete.html
*/

//sample program

var objOfSpecifiedKeyValue = {id: 88, name: "Ram name", description: "Ram description",status:"complete"};
var key = "status";
console.log("2. Exercise on Object Output:"+isStatusComplete(objOfSpecifiedKeyValue,key));

function isStatusComplete(objOfSpecifiedKeyValue, key){
  for(var i in objOfSpecifiedKeyValue){
    if(key===i && objOfSpecifiedKeyValue[i]==="complete"){
      return true;
    }
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sample program

var obj = {
        id : "",
        name : "", 
        description : "", 
        status : "",
        isStatusCompletes : function() {
           if(this.status==="complete"){
              return true;
            }
            return false;
        } 
    }

  // Initializing the parameters. 
  obj.id = 88; 
  obj.name = "ram"; 
  obj.description = "description"; 
  obj.status = "inprogress"; 
    
  // Using method of the object. 
  console.log("isStatusCompletes:"+obj.isStatusCompletes());


////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
3. Exercise on Array
Create a sample application in JavaScript to find out a project based on their id’s and print it’s name and description.
(Hint:  Create array of objects where each object contains project details (id , name , description) )
*/

let projects = [
  {
    id: 1,
    name: "JavaScript",
    description: "JavaScript description",
  },
 {
    id: 2,
    name: "React & Redux",
    description: "React & Redux description",
  },
  {
    id: 3,
    name: "Node",
    description: "Node description",
  }
];
function listProjects(projects,project_id) {
  let project_names = [];
  for (let i=0; i<projects.length; i+=1) {
    if(projects[i].id===project_id){
      project_names.push(projects[i]);
    }
  }
  return project_names;
}
console.log(listProjects(projects,2));


////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
4. Exercise on Functions
Create a sample application in JavaScript to perform the following task on list of Project object.
1.     Add new project object in existing list.
2.     Update the status of particular project object (InProgress to Completed).
3.     Delete a particular project object.
(Hint:  Create array of objects where each object contains project details (id , name , status) also create separate function for each operation )
Sample Object → { pid : 101 , pname : ‘RMS’ , status : ‘InProgress’ }

*/

var projectArr = [];

function addProject(pId, pName, pStatus){
    
    var newProject = {}; 
    newProject.id = pId;
    newProject.name = pName;
    newProject.status = pStatus; 
    projectArr.push(newProject);
    getProject();
}

function deleteProject(pId){
    for(p in projectArr)
            {
                if(pId == projectArr[p].id){

                    projectArr.splice(p, 1);
                }

            }        
    console.log("After deleteing object:"); getProject();  
}


function getProject(){
    for(var i = 0; i < projectArr.length;i++){
        console.log(projectArr[i].name);
        console.log(projectArr[i].status);
    }
}


function updateProjectStatus(projectId){          
        for(p in projectArr)
            {
                if(projectId == projectArr[p].id && projectArr[p].status =='InProgress' ){
                    projectArr[p].status ='Completed';
                    console.log(projectArr[p].status);
                }
            }
        console.log("After updating object status:");
        getProject();     
    }

    addProject(1, 'Project-1 JS', 'InProgress');
    addProject(2, 'Project-2 REACT', 'Completed');
    updateProjectStatus(2);
    deleteProject(2);
    addProject(2, 'Project-3 Angular', 'Completed');
    addProject(2, 'Project-4 REACT-REDUX', 'Completed');

////////////////////////////////////////////////////////////////////////////////////////////////////////////
