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
        name: 'license',
        message: 'License:',
        choices: ['Academic Free License v3.0', 'European Union Public License 1.1', 'MIT']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:',
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
        name: 'githubName',
        message: 'Github name:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    }
];

/* ---------------------- Function to write README file --------------------- */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log(`\nFile written successfully.`);
    })
}

/* --------------------- Function to initialise program --------------------- */
function init() {
    console.log(`\n`);
    inquirer
        .prompt(questions)
        .then((data) => {
            const markDownData = generateMarkdown(data);
            writeToFile("./README.md", markDownData);
        })
}

/* ------------------- Function call to initialise program ------------------ */
init();
