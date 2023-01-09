const inquirer = require('inquirer');
const fs = require('fs');




class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {};
    getId() {};
    getEmail() {};
    getRole() {}; // Returns 'Employee'

}

class Manager extends Employee {
    constructor(managerName, managerID, managerEmail, managerOfficeNumb){
        let name = managerName;
        let id = managerID;
        let email = managerEmail;

        super(name, id, email);
      //  this.name = managerName;
      //  this.id = managerID;
       // this.email = managerEmail;



        this.officeNumber = managerOfficeNumb;
    }


    getRole() {}; // Overridden to return 'Manager' 

}

class Engineer extends Employee {
    constructor(github){
        this.github = github;
    }

    getGitub() {}; // get github url
    getRole() {}; // Overridden to return 'Engineer'

}

class Intern extends Employee {
    constructor(school){
        this.school = school;
    }

    getSchool() {};
    getRole() {}; // Overridden to return 'Intern'

}
//make function
function startManager() { 

    await inquirer.prompt(startManager).then((answers) => {
        // JSON.stringify(answers);
         const manager = new Manager (answers);
 
         teamArray.push(manager);
         console.log(teamArray);
     })
    
    
    [
    {type: 'input',
    message: "What is the team manager's name?",
    name: 'managerName',
    validate: (value)=>{ if(value){return true} else {return "Please provide the team manager's name."}}},

    {type: 'input',
    message: "What is their employee ID number?",
    name: 'managerID',
    validate: (value)=>{ if(value){return true} else {return "Please provide the team manager's ID number."}}},

    {type: 'input',
    message: 'What is their email address?',
    name: 'managerEmail',
    validate: (value)=>{ if(value){return true} else {return "Please provide the team manager's email address."}}},

    {type: 'input',
    message: 'What is their office number?',
    name: 'managerOfficeNumb',
    validate: (value)=>{ if(value){return true} else {return "Please provide the team manager's office number."}}},]

}

function anotherOne () {
    inquirer 
    .prompt([
    {type: 'list',
    message: 'Would you like to create another employee profile?',
    name: 'another',
    choices: ['Manager', 'Engineer', 'Intern', 'No, create my page!']},])

    .then((answer) => {
        if (answers.another === 'Manager') {
           // function 
        }
        else if (answers.another === 'Engineer') {

        }
        else if (answers.another === 'Engineer') {
            
        }
        else {
            // create functions
        }
    } 
    )


}

let teamArray = []; 

// Function to initialize app
async function init() {

    console.log("Welcome to the Team Profile Generator!");






}



// Function call to initialize app
init();