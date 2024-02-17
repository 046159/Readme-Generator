/* ---------------- Function to generate markdown for README ---------------- */
function generateMarkdown(data) {

    /* ------------- Setup the appropriate license badge to display ------------- */
    let badge = "";
    switch (data.license) {
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

    /* -------- Setup heading and hyperlink for screenshot/video section -------- */
    const visualHeading = data.visualType[0] // This is the option the user selected and will be the section heading
    const visualHeadingHyperLink = visualHeading.toLowerCase();


    /* ------------ Setup string to display in the Questions section ------------ */
    const questionString = `Please contact me via email ${data.email} if you have any questions. You can also find my portfolio of work on [Github](https://github.com/${data.githubName})`;

    /* ---------- Return the markdown text that will be written to file --------- */
    return `${badge}\n\n` + 
    `# ${data.title}\n\n` +
    `## Table of Contents\n\n` +
    `[Description](#description)\n\n` +
    `[${visualHeading}](#${visualHeadingHyperLink})\n\n` +
    `[Installation](#installation)\n\n` +
    `[Usage](#usage)\n\n` +
    `[License](#license)\n\n` +
    `[Contributing](#contributing)\n\n` +
    `[Tests](#tests)\n\n` +
    `[Questions](#questions)\n\n` +
    `## Description\n\n${data.description}\n\n` +
    `## ${visualHeading}\n\n![Screenshot](${data.imagePath})\n\n` +
    `## Installation\n\n${data.installation}\n\n` +
    `## Usage\n\n${data.usage}\n\n` +
    `## License\n\nThis application is covered under the following license: **${data.license}**.\n\n` +
    `## Contributing\n\n${data.contributing}\n\n` +
    `## Tests\n\n${data.tests}\n\n` +
    `## Questions\n\n${questionString}.`;
}

/* ------------- Make the data available to the calling function ------------ */
module.exports = generateMarkdown;