const yaml = require("js-yaml");
const fs = require("fs");
const chalk = require("chalk");
const _ = require("lodash");
const { DataConfig, Formats } = require('./config')

let templateStr;

const designToken = () => {
    try {
        // let obj = yaml.safeLoad(fs.readFileSync(DataConfig.inputPath, "utf8"));
        let obj = yaml.safeLoad(fs.readFileSync("./tokens/backgrounds.yml", "utf8"));

        console.log(obj);
        // _.keys(Formats).map((key) => {
        //     createDataObj(Formats[key], obj);
        // })

    } catch (e) {
        console.log(e);
    }
};

const createDataObj = (format, obj) => {
    templateStr = '';
    templateStr = templateStr.concat(format.headInformation + '\n');
    _.keys(obj).map((key) => {
        let theKey = key;
        if (typeof (obj[key]) == 'object') {

            _.keys(obj[key]).map((key2) => {
                let theSecondKey = key2;
                if (typeof (obj[key][key2]) == 'object') {
                    _.keys(obj[key][key2]).map((key3) => {
                        let k = theKey + '_' + theSecondKey + '_' + key3;
                        let v = obj[key][key2][key3];
                        createDataField(format.template(k, v))
                    });

                } else {
                    let k = theKey + '_' + theSecondKey;
                    let v = obj[key][key2]
                    createDataField(format.template(k, v))
                }
            });

        }
        templateStr = templateStr.concat('\n')
    })
    let outputFile = DataConfig.outputDir + '/' + DataConfig.outputName + format.fileExtension;

    writeFile(outputFile);
}

const writeFile = (outputFile) => {
    fs.writeFile(outputFile, templateStr, err => {
        if (err) throw err;
        console.log(chalk.green.bold("created File : " + outputFile));
    });
}
const createDataField = (patternObj) => {
    let pattern = patternObj;
    pattern = pattern.replace('-', '_');
    templateStr = templateStr.concat(pattern + '\n');
}
designToken();
