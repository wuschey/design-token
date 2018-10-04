const fs = require("fs");
const chalk = require("chalk");
const _ = require("lodash");
const { DataConfig, Formats, _arrTokenFiles } = require("./config/config");

class TokenFiles {
  constructor(arrToken) {
    this._arrToken = arrToken;
  }

  create() {
    let tokenObj = {};
    for (let index = 0; index < this._arrToken.length; index++) {
      tokenObj = _.merge(tokenObj, this._arrToken[index].props);
    }
    const numFormats = Object.keys(Formats).length;
    for (const key in Formats) {
      if (Formats.hasOwnProperty(key)) {
        const fileObj = Formats[key];

        this.createFileInputs(tokenObj, Formats[key]);
      }
    }
  }

  createFileInputs(props, format) {
    console.log(format.fileExtension);
    let templateStr = "";

    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        const element = props[key];
        const val = element.value;
        if (
          format.fileExtension == ".es6.js" ||
          format.fileExtension == ".js"
        ) {
          key = key.replace(/-/g, "_");
        }

        templateStr = templateStr.concat(format.template(key, val));
        templateStr = templateStr.concat("\n");
      }
    }
    templateStr = templateStr.concat("\n");
    const fileName = DataConfig.outputName + format.fileExtension;
    const dir = DataConfig.outputDir;
    const outputFile = dir + "/" + fileName;

    this.writeFile(outputFile, templateStr);
  }

  writeFile(outputFile, templateStr) {
    fs.writeFile(outputFile, templateStr, err => {
      if (err) throw err;
      console.log(chalk.green.bold("created File : " + outputFile));
    });
  }
}

module.exports = TokenFiles;
