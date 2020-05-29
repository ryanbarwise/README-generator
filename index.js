

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
    name: "urlInfo",
    message: "What is the URL to your project?",
  },

  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project.",
  },

  {
    type: "input",
    name: "contact",
    message: "What is your email address that is associated with GitHub?",
  },

  {
    type: "input",
    name: "license",
    message: "What is the license for this projects?",
    default: "MIT",
  },

  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },

  {
    type: "input",
    name: "tests",
    message: "What is the command for running tests",
    default: "npm test",
  },

  {
    type: "input",
    name: "repo",
    message: "What does the user need to know about using the repo?",
  },

  {
    type: "input",
    name: "contributions",
    message: "What does the user need to know about contibuting to the repo?",
  },
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
    writeToFile("readMe.md", markdown);
  });
}

init();
