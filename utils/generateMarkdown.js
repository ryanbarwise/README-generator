function generateMarkdown(data) {
  return `
  
  # ${data.title}
  
  [![GitHub license](https://img.shields.io/github/last-commit/${data.username}/${data.title})](https://github.com/${data.username}/${data.title})
   


  ## Description
  #### ${data.description}

  ## Table of Contents
  1. [License](#license)
  2. [Installing Dependencies](#dependencies)
  3. [Tests](#tests)
  3. [Repo](#repo)
  4. [Contributions](#contributions)

  <a name = "license"></a>
  ## License Information
     ${data.license}

  <a name = "dependencies"></a>
  ## Dependencies
     ${data.dependencies}

  <a name = "tests"></a>
  ## Tests
   $ ${data.tests}

  <a name = "repo"></a>
  ## Repo
  ${data.repo}

  <a name = "contributions"></a>
  ## Contributions 
   ${data.contributions}
  
    
  
  `;
}

module.exports = generateMarkdown;
