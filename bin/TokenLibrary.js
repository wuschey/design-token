const { DataConfig } = require("./config/config");
const {
  htmlSkeleton,
  categoryTemplate,
  fontTemplate,
  colorTemplate
} = require("./config/templates");
const { writeFile } = require("./utils/writefile");
const { hexToRgb } = require("./utils/hextorgb");

class TokenLibrary {
  constructor() {
    this.globalInfos = {};
    this.output = "";
    this.templateType;
    this.fontSetted = false;
  }

  setTokenData(tokenData) {
    this._arrToken = tokenData;
  }

  create() {
    const _numTokens = this._arrToken.length;

    for (let i = 0; i < _numTokens; i++) {
      const tokenObj = this._arrToken[i];

      this.templateType = tokenObj.global.type;
      let libraryLinks;

      // fonts for librarypreview
      if (this.templateType == "fonts") {
        libraryLinks = this.getFontLinksForLibrary(tokenObj.global.fontlinks);
        this.fontSetted = true;
      }

      // console.log(tokenObj.global.fontlinks);
      this.template = this.getTemplate(this.templateType);

      // Create structured data object;
      let infoObj = {};
      infoObj.category = tokenObj.global.category;
      infoObj.type = tokenObj.global.type;

      // create table output from Template
      infoObj.list = this.createListOutput(tokenObj.props);

      //concat the output

      this.output = this.output.concat(
        htmlSkeleton(categoryTemplate(infoObj), libraryLinks)
      );
    }
    // Write the output
    writeFile(DataConfig.templateName, this.output);
  }
  metaLinkTPL(fontLink) {
    return `
    <link href="${fontLink}" rel="stylesheet"></link>
    `;
  }
  getFontLinksForLibrary(fontlinks) {
    let links = "";
    for (const key in fontlinks) {
      if (fontlinks.hasOwnProperty(key)) {
        const element = fontlinks[key];
        links = links.concat(this.metaLinkTPL(element));
      }
    }
    return links;
  }
  /* return the template for that token type */
  getTemplate(type) {
    let template;

    switch (type) {
      case "color":
        template = colorTemplate;
        break;

      case "fonts":
        template = fontTemplate;
        break;
    }
    return template;
  }

  writeDataObject(prop, obj) {
    console.log(prop);
    let dataObj = {};

    dataObj.optionName = obj.name;
    dataObj.value = obj.value;
    dataObj.tokenName = prop;
    return dataObj;
  }
  extendDataObjectByColor(dataObj, el) {
    dataObj.hex = hexToRgb(el.value);
    dataObj.desc = el.description;
    return dataObj;
  }

  createListOutput(obj, tileTemplate) {
    let list = "";

    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        const valueObject = obj[prop];

        let dataObj = this.writeDataObject(prop, valueObject);

        if (this.templateType == "color") {
          dataObj = this.extendDataObjectByColor(dataObj, valueObject);
          list = list.concat(this.template(dataObj));
        } else
          list = list.concat(
            this.template(prop, valueObject.value, dataObj.tokenName)
          );
      }
    }
    return list;
  }
}

module.exports = TokenLibrary;
