// User GitHub profile picture
// User GitHub email

// -- Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// The generated README includes 1 badge that's specific to the repository.

// GIVEN the developer has a GitHub profile and a repository

// WHEN prompted for the developer's GitHub username and repo specific information

// THEN a README for the repo is generated
/* 
function echo(val){
    console.log(val)
}
*/

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

  {
      type: "input",
      name: 'URL',
      message: "What is the URL to your project"
  },

  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },

  {
      type: "input",
      name: "license",
      message: "What kind of license should your project have?"
  },

  {
      type: "input",
      name: "dependencies",
      message: "What kind command should be run to install dependencies?"
  },
  {
      type: "input",
      name: "usingRepo",
      message: "What does the user need to know about using the repo?"
  },

  {   type: "input",
      name: "contributing",
      message: "What does the user need to know about contibuting to the repo"

  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log("README SAVED!", fileName);
  });
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    // console.log(JSON.stringify(responses, '', 4))
    const markdown = generateMarkdown(responses);
    writeToFile("readit.md", markdown);
  });
}

init();
