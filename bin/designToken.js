const yaml = require("js-yaml");
const fs = require("fs");
const chalk = require("chalk");
const _ = require("lodash");
const {DataConfig, Formats, tokenFiles} = require('./config')
const colorTemplate = require('./config/templates');
class DesignToken {

    constructor() {
        this._arrToken = [];
        // this._arrFileSetting = ['es6', "js", "scss", "less"];
    }
    create() {
        this.createTokenArray();
    }

    createTokenArray() {
        for (const key in tokenFiles) {
            let tokenObj = {};

            if (tokenFiles.hasOwnProperty(key)) {
                let tokenFile = tokenFiles[key];
                try {
                    tokenObj = yaml.safeLoad(fs.readFileSync('./tokens/' + tokenFile, "utf8"));
                    this
                        ._arrToken
                        .push(tokenObj);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        this.createTokenOutput();
        // this.getTokenKeys();
        

    }

    getTokenKeys() {
        let tokenObj = {};
        for (let index = 0; index < this._arrToken.length; index++) {
            tokenObj = _.merge(tokenObj, this._arrToken[index].props);
        }
        const numFormats = Object
            .keys(Formats)
            .length;
        for (const key in Formats) {
            if (Formats.hasOwnProperty(key)) {
                const fileObj = Formats[key];

                this.createFileInputs(tokenObj, Formats[key]);
                // this.createTokenOutput(tokenObj);
            }
        }
    }

    createFileInputs(props, format) {
        let templateStr = '';

        for (let key in props) {

            if (props.hasOwnProperty(key)) {
                const element = props[key];
                const val = element.value;
                key = key.replace('-', '_')
                templateStr = templateStr.concat(format.template(key, val));
                templateStr = templateStr.concat('\n');
            }
        }
        templateStr = templateStr.concat('\n');
        const fileName = DataConfig.outputName + format.fileExtension;
        const dir = DataConfig.outputDir;
        const outputFile = dir + '/' + fileName

        this.writeFile(outputFile, templateStr);
    }

    writeFile(outputFile, templateStr) {
        fs.writeFile(outputFile, templateStr, err => {
            if (err) 
                throw err;
            console.log(chalk.green.bold("created File : " + outputFile));
        });
    }

    createTokenOutput(){
        // console.log(tokenObj);
        // console.log(colorTemplate('hallo'));
        for (let index = 0; index < this._arrToken.length; index++) {
            const element = this._arrToken[index];
            console.log(element.global.category);
        }
    }

}
module.exports =  DesignToken;