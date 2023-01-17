const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Manager = require('./classes/manager.js');
const Engineer = require('./classes/engineer.js');
const Intern = require('./classes/intern.js');
const generateHTML = require('./src/generateHTML.js');


let teamArray = []; 


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
        anotherOne();
     })
}


function addEngineer() { 

    inquirer.prompt([
    {type: 'input',
    message: "What is the engineer's name?",
    name: 'name',
    validate: (value)=>{ if(value){return true} else {return "Please provide the engineer's name."}}},

    {type: 'input',
    message: "What is their employee ID number?",
    name: 'id',
    validate: (value)=>{ if(value){return true} else {return "Please provide the engineer's ID number."}}},

    {type: 'input',
    message: 'What is their email address?',
    name: 'email',
    validate: (value)=>{ if(value){return true} else {return "Please provide the enginner's email address."}}},

    {type: 'input',
    message: 'What is their GitHub username?',
    name: 'github',
    validate: (value)=>{ if(value){return true} else {return "Please provide the engineer's GitHub username."}}},])

    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineer);
        console.log(teamArray);
        anotherOne();
     })
}



function addIntern() { 

    inquirer.prompt([
    {type: 'input',
    message: "What is the intern's name?",
    name: 'name',
    validate: (value)=>{ if(value){return true} else {return "Please provide the intern's name."}}},

    {type: 'input',
    message: "What is their employee ID number?",
    name: 'id',
    validate: (value)=>{ if(value){return true} else {return "Please provide the intern's ID number."}}},

    {type: 'input',
    message: 'What is their email address?',
    name: 'email',
    validate: (value)=>{ if(value){return true} else {return "Please provide the intern's email address."}}},

    {type: 'input',
    message: 'What school do they attend?',
    name: 'school',
    validate: (value)=>{ if(value){return true} else {return "Please provide the school the intern attends."}}},])

    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(intern);
        console.log(teamArray);
        anotherOne();
     })
}


function anotherOne () {
    inquirer.prompt([
    {type: 'list',
    message: 'Would you like to create another employee profile?',
    name: 'another',
    choices: ['Manager', 'Engineer', 'Intern', 'No, create my page!']},])

    .then((answers) => {
        if (answers.another === 'Manager') {
            startManager();  }

        else if (answers.another === 'Engineer') {
            addEngineer();   }
        else if (answers.another === 'Intern') {
            addIntern();
        }
        else {
            // creation functions
           // console.log(teamArray);
            creation(teamArray);
        }
    })
}


function creation() {

    const data = generateHTML(teamArray);
    writeFileAsync('yourTeam.html', data);
}


function writeToFile(fileName, data) {
    fs.writeFile(`./dist/output/${fileName}`, data, err => { if (err) {
        return console.log(err);
    }
    
    console.log("Congratulations! Your file is created!")   });
}


const writeFileAsync = util.promisify(writeToFile);


// Function to initialize app
async function init() {
    console.log("Welcome to the Team Profile Generator!");
    startManager();
}


// Function call to initialize app
init();