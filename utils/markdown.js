// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ![](https://img.shields.io/badge/license-${data.license}-blue)
        ## Description
        ${data.description}
        
        ## Table of Contents
            - [Installation](#installation)
            - [Usage](#usage)
            - [Credits](#credits)
            - [License](#license)
        
        ## Installation
            ${data.installation}

        ## Usage
            ${data.usage}

        ## Credits

            ${data.credits}
        ## Features
            ${data.features}

        ## How to Contribute
            ${data.contribute}

        ## Tests
            ${data.tests}

        ## Questions
            Please use the information below to contact me if you have any further questions, thank you.

            https://github.com/${data.github}
            ${data.email}
    `
}

module.exports = generateMarkdown;