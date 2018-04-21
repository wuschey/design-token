const outputDir = './output'
const inputPath = './token.yml';
const outputName = 'variables';

const DataConfig = {
  outputDir,
  inputPath,
  outputName,
}

const Formats = {
  "es6": {
    "headInformation": '/* SourceCode Doc/ Info */',
    "template": (k, v) => `export const ${k} = ${v};`,
    "fileExtension": '.es6.js',
  },
   "js": {
    "headInformation": '/* SourceCode Doc/ Info */',
    "template": (k, v) => `exports.${k} = ${v};`,
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


module.exports = {
  DataConfig,
  Formats
}