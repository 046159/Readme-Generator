// function to generate markdown for README
function generateMarkdown(data) {
    console.log("Am in generateMarkDown function");
    return `# ${data.title}\n\n# Description\n\n${data.description}\n\n#Table of Contents\n\n${data.toc}\n\n#Installation\n\n${data.installation}\n\n#Usage\n\n${data.usage}\n\n#License\n\n${data.license}\n\n#Contributing\n\n${data.contributing}\n\n#Tests\n\n${data.tests}\n\n#Questions\n\n${data.questions}
  
  `;
  }
  
  module.exports = generateMarkdown;
  