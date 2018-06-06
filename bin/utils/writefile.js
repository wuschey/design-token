const fs = require("fs");

const writeFile = (outputFile, templateStr) => {
  fs.writeFile(outputFile, templateStr, err => {
    if (err) throw err;
    // console.log(chalk.green.bold("created File : " + outputFile));
  });
};

exports.writeFile = writeFile;
