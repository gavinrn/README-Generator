// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'desc',
        message: "What is the description of your project?"
    },
    {
        type: 'input',
        name: 'install',
        message: "How would you install your project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How would you use your project?"
    },
    {
        type: 'list',
        name: 'License',
        message: "What license is your project using?",
        choices: ["Apache License 2.0" , "GNU GENERAL PUBLIC LICENSE v3.0" , "MIT License" , 'BSD 2-Clause "Simplified" License' ,
            'BSD 3-Clause "New or "Revised" License' , 'Boost Software License - Version 1.0' , 'CC0 1.0 Universal' , 'Eclipse Public License - v 2.0',
         'GNU AFFERO GENERAL PUBLIC LICENSE Version 3' , 'GNU GENERAL PUBLIC LICENSE Version 2', 'GNU LESSER GENERAL PUBLIC LICENSE Version 2.1',
         'Mozilla Public License 2.0' , 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: "How would you like others to contribute to the project?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "How would you like others to write tests for you?"
    },
    {
        type: 'input',
        name: 'Github',
        message: "What is your github?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email"
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        else
           console.log("The file is updated with the given data");
    }
)}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {

        writeToFile("README.md" ,
            `# ${answers.title}
## Description
${answers.desc}
## Install
${answers.install}
## Usage
${answers.usage}
## License
${answers.License}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
If you have any questions feel free to message me at ${answers.Github} or ${answers.email}`
            );
    }
    );
}

// Function call to initialize app
init();
