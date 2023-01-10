const inquirer = require('inquirer');
const fs = require('fs');


let teamArray = []; 

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this.role;
    }; // Returns 'Employee'

}

class Manager extends Employee {
    constructor(name, id, email, officeNumb){

        super(name, id, email);

        this.officeNumber = officeNumb;
        this.role = 'Manager';
    }


    getRole() {
        return this.role;
    }; // Overridden to return 'Manager' 

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

    inquirer.prompt([
    {type: 'input',
    message: "What is the team manager's name?",
    name: 'name',
    validate: (value)=>{ if(value){return true} else {return "Please provide the team manager's name."}}},

    {type: 'input',
    message: "What is their employee ID number?",
    name: 'id',
    validate: (value)=>{ if(value){return true} else {return "Please provide the team manager's ID number."}}},

    {type: 'input',
    message: 'What is their email address?',
    name: 'email',
    validate: (value)=>{ if(value){return true} else {return "Please provide the team manager's email address."}}},

    {type: 'input',
    message: 'What is their office number?',
    name: 'officeNumb',
    validate: (value)=>{ if(value){return true} else {return "Please provide the team manager's office number."}}},])

    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumb);
        teamArray.push(manager);
        console.log(teamArray);
     })

}

function anotherOne () {
    inquirer.prompt([
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



// Function to initialize app
async function init() {

    console.log("Welcome to the Team Profile Generator!");

    startManager();




}



// Function call to initialize app
init();