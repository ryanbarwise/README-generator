
function generateMarkdown(data) {
    return `
  
  # ${data.title}

  ## Description
  ## ${data.description}

  ## Table of Contents
  1. [License](#license)
  2. [Installing Dependencies](#dependencies)
  3. [Using the Repo](#usingRepo)
  4. [Contributions](#contributing)


  ## Type of License <a name="licesne"></a>
  ### ${data.license}

  ## Dependencies <a name ="dependencies"></a>
  ### ${data.dependencies}

  ## Using the Repo <a name="usingRepo"></a>
  ### ${data.usingRepo}

  ## Contributions <a name = "contributions"></a>
  ### ${data.contributions}
  
    
  
  `;
  }
  
  module.exports = generateMarkdown;