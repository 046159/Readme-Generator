/* ---------------------------- Define constants ---------------------------- */
const fs = require("fs"); // Native to Node as a library, and required for access the file system
const path = require('path'); // Native to Node as a library - optional, may be useful but don't really need it - delete line if not used
const inquirer = require("inquirer"); // Needed to take input from the user on the command line
const generateMarkdown = require("./utils/generateMarkdown"); // This separate JS file generates the actual markdown for the Readme file

/* ----------------------- Array of questions for user ---------------------- */
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation:',
    },
    {
        type: 'list',
        name: 'usage',
        message: 'Usage:',
        choices: ['Academic Free License v3.0', 'European Union Public License 1.1', 'MIT']
    },
    {
        type: 'input',
        name: 'license',
        message: 'License:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions:',
    }
];

/* ---------------------- Function to write README file --------------------- */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("File written.");
    })
}

/* --------------------- Function to initialise program --------------------- */
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const markDownData = generateMarkdown(data);
            console.log(markDownData);
            writeToFile("./README.md",markDownData);
        })
}

/* ------------------- Function call to initialise program ------------------ */
init();
