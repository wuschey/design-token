//TODO sort Config File

const outputDir = './output'
const outputName = 'variables';
const templateName = outputDir + '/TokenLibrary.html';
const tokenDir = './tokens/';

const DataConfig = {
  outputDir,
  outputName,
  templateName,
  tokenDir
}

const Formats = {
  "es6": {
    "headInformation": '/* SourceCode Doc/ Info */',
    "template": (k, v) => `export const ${k} = '${v}';`,
    "fileExtension": '.es6.js',
  },
   "js": {
    "headInformation": '/* SourceCode Doc/ Info */',
    "template": (k, v) => `exports.${k} = '${v}';`,
    "fileExtension": '.js',
  },

  "scss": {
    "headInformation": '/* SourceCode Doc/ Info */',
    "template": (k, v) => `$${k} : ${v};`,
    "fileExtension": '.scss',
  },
  "less": {
    "headInformation": '/* SourceCode Doc/ Info */',
    "template": (k, v) => `@${k} : ${v};`,
    "fileExtension": '.less',
  }
}


const _arrTokenFiles = {
  "fonts" : "fonts.yml",
  "backgrounds" : "backgrounds.yml",
  "text" : "text.yml",
  "border" : "border.yml",
}

module.exports = {
  DataConfig,
  Formats,
  _arrTokenFiles,
}