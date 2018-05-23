const outputDir = './output'
const inputPath = './token.yml';
const outputName = 'variables';
const templateName = './output/template.html';

const DataConfig = {
  outputDir,
  inputPath,
  outputName,
  templateName
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


const tokenFiles = {
  "backgrounds" : "backgrounds.yml",
  "fonts" : "fonts.yml",
  "text" : "text.yml"
}

module.exports = {
  DataConfig,
  Formats,
  tokenFiles,
}