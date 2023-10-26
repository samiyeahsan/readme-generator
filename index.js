// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  },
  {
    type: 'iput',
    message: 'Could you please describe what is this project about',
    name: 'description',
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  },
  {
    type: 'iput',
    message: 'How do install your application?',
    name: 'installation',
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  },
  {
    type: 'iput',
    message: 'could you please provide the steps needs to follow',
    name: 'instruction',
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  },
  {
    type: 'input',
    message: 'Is there anyone involved in this project that you like to give credits to them?',
    name: 'credit',
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  },
  {
    type: 'input',
    message: 'How can you use this app ?',
    name: 'usage',
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  },
  {
    type: 'list',
    message: 'what license did you use for this project?',
    name: 'license',
    choices: ["the GPL license", "the premissive license", "the GNU license", "Unlicense"],
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  },
  
  {
    type: 'input',
    message: 'what is your GitHub URL?',
    name: 'github',
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: (value) => { if (value) {return true} else {return 'you need to enter a value to continue'}}
  }
]


  function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=>{
    if (err){
      return console.log(err);
    }
    console.log("Your README file has been created");

  });
}

function init() {
  inquirer.prompt(questions)
  .then(function (response)  {
    console.log(response)
    writeToFile("README.md", generateMarkdown(response));
});
};


init();
