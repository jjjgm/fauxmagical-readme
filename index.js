// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Prompting user for README information
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Project Title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Project Description:',
            name: 'description',
        },
        {
            type: 'Y/N',
            message: 'Would you like to add a Table of Contents?',
            name: 'tableOfContents',
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage Information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contribution Guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Test Instructions:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Credits:',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'License:',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: 'Assets:',
            name: 'assets',
        } 
    ]
)



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
