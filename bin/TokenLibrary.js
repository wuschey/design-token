const fs = require("fs");

const {DataConfig} = require('./config/config')
const {
    categoryTemplate, 
    fontTemplate, 
    colorTemplate
    } = require('./config/templates');


//TODO: Export writeFile Function in DataCreate Class
 
class TokenLibrary{

    constructor(arrToken){
        this.output = '';
        this._arrToken = arrToken;
    }

    create() {

        for (let index = 0; index < this._arrToken.length; index++) {
            /* get all Array Elments from Token Files */
            const element = this._arrToken[index];

            // Create structured data object;

            let obj = {};
            obj.category = element.global.category;
            obj.type = element.global.type;

            /* Choose between different template types: */

            let templateType = obj.type;
            let template;

            switch (templateType) {
                case 'color':
                    console.log('Template Type == Color');
                    template = colorTemplate;
                    // obj.list = this.createListOutput(element.props, colorTileTemplate);
                    break;

                case 'fonts':
                    console.log('Template Type == fonts');
                    template = fontTemplate;

                    break;
            }
            // create table output from Template
            obj.list = this.createListOutput(element.props, template);

            //concat the output
            this.output = this
                .output
                .concat(categoryTemplate(obj));

        }
        // Write the output
        this.writeFile(DataConfig.templateName, this.output);

    }

    createListOutput(obj, tileTemplate) {
        let list = '';
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const el = obj[key];
                list = list.concat(tileTemplate(key, el.value));

            }
            return list;
        }

    }

    writeFile(outputFile, templateStr) {
        fs.writeFile(outputFile, templateStr, err => {
            if (err) 
                throw err;
            // console.log(chalk.green.bold("created File : " + outputFile));
        });
    }

}

module.exports = TokenLibrary;