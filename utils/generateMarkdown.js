
function generateMarkdown(data) {
  return `# ${data.title}
  ##Table of Content
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contibution)
  -[additional Info](#additional-Info)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ##Instruction
  ${data.instrcution}
  ## Usage
  ${data.usage}
  ## Credit
  ${data.credit}
  ## License
  ${data.license}

  ### Contact Information
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data. email}`;

}

module.exports = generateMarkdown;
