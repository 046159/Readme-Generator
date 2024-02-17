/* ---------------------------- Define constants ---------------------------- */
const fs = require("fs"); // Native to Node as a library, and required for access the file system
const inquirer = require("inquirer"); // Needed to take input from the user on the command line
const generateMarkdown = require("./utils/generateMarkdown"); // This separate JS file generates the actual markdown for the Readme file

/* ----------------------- Array of questions for user ---------------------- */
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the application:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of the application:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe steps needed to install the application:',
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
    },
    {
        type: 'checkbox',
        name: 'visualType',
        message: 'Do you want to attach a screenshot or a video:',
        choices: ["Screenshot", "Video"],
        default: ["Screenshot"],
    },
    {
        type: 'input',
        name: 'imagePath',
        message: 'Location of visual (e.g. ./assets/images/<file>.png):'
    }
];

/* ---------------------- Function to write README file --------------------- */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log(`\nFile written successfully.\n`);
    })
}

/* --------------------- Function to initialise program --------------------- */
function init() {
    console.log(`\nWelcome to the Readme Generator. Please answer the questions below to automatically generate the README.md file.\n`);
    inquirer
        .prompt(questions)
        .then((data) => {
            const markDownData = generateMarkdown(data);
            writeToFile("./sampleREADME.md", markDownData);
        })
}

/* ------------------- Function call to initialise program ------------------ */
console.clear();
init();
