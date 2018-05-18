const colorTemplate = obj => {
  return `
    <h1>${obj.token}</h1>
    <h2>${obj.key}</h2>
    <h2>${obj.value}</h2>
  `;
};

module.exports = colorTemplate;
