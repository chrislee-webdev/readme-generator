// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('A name for your project is required.')
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project. (Required)',
            validate: projectDesc => {
                if (projectDesc) {
                    return true;
                } else {
                    console.log('A description for your project is required.')
                }
            }
        },

        {
            type: 'input',
            name: 'install',
            message: 'Please provide installation instructions for your project. (Required)',
            validate: projectInstall => {
                if (projectInstall) {
                    return true;
                } else {
                    console.log('Installation intructions are required.')
                }
            }
        },

        {
            type: 'input',
            name: 'usageInfo',
            message: 'How does the user make use of this project? (Required)',
            validate: howToUse => {
                if(howToUse) {
                    return true;
                } else {
                    console.log('Please provide information on how to make use of this project.')
                }
            }
        },

        {
            type: 'input',
            name: 'contribute',
            message: 'How can someone contribute to this project? (Required)',
            validate: contribute => {
                if (contribute) {
                    return true;
                } else {
                    console.log('Please provide information on how to contribute to this project.')
                }
            }
        },

        {
            type: 'input',
            name: 'test',
            message: 'How does the user test this project? (Required)',
            validate: test => {
                if (test) {
                    return true;
                } else {
                    console.log('User instructions are required.')
                }
            }
        },

        {
            type: 'checkbox',
            name: 'license',
            choices: [
                'Artistic license 2.0',
                'Creative Commons license family',
                'The Unlicense'
            ],
            message: 'Please select a license for your project. (Required)',
            validate: licenseSelection => {
                if (licenseSelection) {
                    return true;
                } else {
                    console.log('A license selection is required')
                }
            }
        },
        
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username. (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('You must provide your GitHub username.')
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('An email address is required.')
                }
            }
        }

    ])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log('hello node!')