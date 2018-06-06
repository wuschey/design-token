const yaml = require("js-yaml");
const fs = require("fs");

const {_arrTokenFiles, DataConfig} = require('./config/config');
const TokenLibrary = require('./TokenLibrary');
const TokenFiles = require('./TokenFiles');

class DesignToken {

    constructor() {
        this._arrToken = [];
    }
    
    create() {
        // Create Data Array for Files & Library
        for (const key in _arrTokenFiles) {
            let tokenObj = {};

            if (_arrTokenFiles.hasOwnProperty(key)) {
                let tokenFile = _arrTokenFiles[key];
                try {
                    tokenObj = yaml.safeLoad(fs.readFileSync(DataConfig.tokenDir + tokenFile, "utf8"));
                    // console.log(tokenObj);
                    this
                        ._arrToken
                        .push(tokenObj);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        const tokenLibrary = new TokenLibrary(this._arrToken);
        tokenLibrary.create();

        const tokenFiles = new TokenFiles(this._arrToken);
        tokenFiles.create();
    }
}
const designToken = new DesignToken();
designToken.create();