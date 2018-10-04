// const htmlHead = fontLinks =>

const htmlSkeleton = (template, fontLinks) => {
  return `
  <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Token Library</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${fontLinks}
    
</head>
<style>
    th {
        background-color: #F4F4F4;
        text-align: left;
        border-top: 1px solid #ccc;
        border-bottom: 2px solid #ccc;
        border-left: none;
        border-right: none;
    }

    td {
        border-bottom: 1px solid #ccc;
        padding: 20px 0 20px 10px;

    }
</style>
<body>
${template}
</body>
</html>
`;
};

const categoryTemplate = obj => {
  return `
    <h2>${obj.category}</h2>
    <table cellpadding="7" cellspacing="0">
        <thead>
            <tr>
                <th width="250px">Token key</th>
                <th width="250px">Example</th>
                <th>Details</th>
            </tr>
        </thead>
    <tbody>
    ${obj.list}
    </tbody>
    </table>
  `;
};

const colorTemplate = dataObj => {
  return `
  <tr>
  <td><strong>${dataObj.tokenName} </strong><br/> ${dataObj.desc}</td>
  <td>
    <div style="background-color:${
      dataObj.value
    };font-weight:bold;height:50px;border:1px solid grey"></div>
    
  </td>
  <td>
  r: ${dataObj.hex.r} g ${dataObj.hex.g} b ${dataObj.hex.b}<br/>
    ${dataObj.value}<br/>
    ${dataObj.optionName}
  </td>
  </tr>
    `;
};

const fontTemplate = (token, fontName) => {
  return `
    <tr>
      <td>${token}</td>
      <td>
        <span style="font-family:${fontName}; font-size:20px;">${fontName}</span>
      </td>
      <td>
      </td>
    </tr>
    `;
};

module.exports = {
  htmlSkeleton,
  categoryTemplate,
  colorTemplate,
  fontTemplate
};
