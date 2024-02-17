/* ---------------- Function to generate markdown for README ---------------- */
function generateMarkdown(data) {

    var badge = "";

    switch (data.usage) {
        case "Academic Free License v3.0":
            badge = "[![License: AFL 3.0](https://img.shields.io/badge/License-AFL%203.0-blue.svg)](https://opensource.org/licenses/AFL-3.0)"
            break;
        case "European Union Public License 1.1":
            badge = "[![License: EUPL 1.1](https://img.shields.io/badge/License-EUPL%201.1-blue.svg)](https://opensource.org/licenses/EUPL-1.1)"
            break;
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        default:
            break;
    }

    return `${badge}\n\n# ${data.title}\n\n# Description\n\n${data.description}\n\n# Table of Contents\n\n[Description](#description)\n\n[Installation](#installation)\n\n[Usage](#usage)\n\n[License](#license)\n\n[Contributing](#contributing)\n\n[Tests](#tests)\n\n[Questions](#questions)\n\n# Installation\n\n${data.installation}\n\n# Usage\n\n${data.usage}\n\n# License\n\n${data.license}\n\n# Contributing\n\n${data.contributing}\n\n# Tests\n\n${data.tests}\n\n# Questions\n\n${data.questions}`;
}
module.exports = generateMarkdown;