// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  else return `[![License](https://img.shields.io/badge/License--]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  else return 'n\[license]()'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else return `## License
  This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* ${renderLicenseBadge(data.license)}
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)

* ${data.description}
* ${data.tableOfContents}
* ${data.installation}
* ${data.usage}
* ${renderLicenseBadge(data.license)}
* ${data.contribution}}
* [Tests](#tests)


`;
}

module.exports = generateMarkdown;
