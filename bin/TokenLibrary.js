const { DataConfig } = require("./config/config");
const {
  categoryTemplate,
  fontTemplate,
  colorTemplate
} = require("./config/templates");
const {writeFile} = require("./utils/writefile");
const {hexToRgb} = require("./utils/hextorgb");


class TokenLibrary {
  constructor(arrToken) {
    this.output = "";
    this._arrToken = arrToken;
    // console.log(this._arrToken);
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
        case "color":
          console.log("Template Type == Color");
          template = colorTemplate;
          // obj.list = this.createListOutput(element.props, colorTileTemplate);
          break;

        case "fonts":
          console.log("Template Type == fonts");
          template = fontTemplate;

          break;
      }
      // create table output from Template
      obj.list = this.createListOutput(element.props, template,templateType);

      //concat the output
      this.output = this.output.concat(categoryTemplate(obj));
    }
    // Write the output
    writeFile(DataConfig.templateName, this.output);
  }
  


  createListOutput(obj, tileTemplate,templateType) {
    console.log(obj);
    let list = "";
    let dataObj ={};

    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        const el = obj[prop];
        let tokenName = '';
        if (el.name) tokenName = el.name;

        
        dataObj.prop = prop;
        dataObj.value = el.value;
        dataObj.tokenName = tokenName

        if (templateType == 'color')
        {
          dataObj.hex = hexToRgb(el.value);
          dataObj.desc = el.description;
          // console.log(this.hexToRgb(el.value));
          list = list.concat(tileTemplate(dataObj));
        }
        else
        list = list.concat(tileTemplate(prop, el.value, tokenName));

      }
    }
    return list;
  }

}

module.exports = TokenLibrary;
