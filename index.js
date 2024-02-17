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
        name: 'toc',
        message: 'Table of Contents:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:',
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

// function to write README file
function writeToFile(fileName, data) {
}

/* --------------------- Function to initialise program --------------------- */
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data.title);
            console.log(data.description);
            console.log(data.toc);
            console.log(data.installation);
            console.log(data.usage);
            console.log(data.license);
            console.log(data.contributing);
            console.log(data.tests);
            console.log(data.questions);
            const markDownData = generateMarkdown(data);
            console.log(markDownData);
        })
}

/* ------------------- Function call to initialise program ------------------ */
init();
