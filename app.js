const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is their name?"  
    },
    {
        type: "input",
        name: "id",
        message: "What is their id?"  
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"  
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?"  
    },

]

const init = () => {
    inquirer.prompt(managerQuestions).then(function (answers) {
        console.log(answers);
        
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    })
};

const chooseMember = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Quit and print"]
        }
    ]).then(function (answers) {
        switch (answers.type) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;
            default:
                quitAndPrint()
        }
    })
}

const addEngineer = () => {
    console.log("adding Engineer")
    //ask questions and then add engineer, push new employee to array for render
    chooseMember();
}

const addIntern = () => {
    console.log("adding Intern")
    //ask questions and then add intern, push new employee to array for render
    chooseMember();
}

const quitAndPrint = () => {
    console.log("Quit and Print")
    //quit questions and start render
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not. The fs npm package may have methods to check if a directory exists, and they
// may also have methods to create a directory that doesn't...

init();
