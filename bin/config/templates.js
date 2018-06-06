const categoryTemplate = obj => {
  return `
    <h2>${obj.category}</h2>
    <table cellpadding="7">
    <tr>
      <th width="250px">Token key</th>
      <th width="250px">Example</th>
    </tr>
    ${obj.list}
    </table>
  `;
};

const colorTemplate = (dataObj) => {
  return (`
  <tr>
  <td>${dataObj.tokenName} <br/> ${dataObj.desc}</td>
  <td>
    <div style="background-color:${dataObj.value};font-weight:bold;height:50px;border:1px solid grey"></div>
    r: ${dataObj.hex.r} g ${dataObj.hex.g} b ${dataObj.hex.b}<br/>
    ${dataObj.value}<br/>
    ${dataObj.tokenName}
  </td>
  </tr>
    `)
}

const fontTemplate = (token, fontName) => {
  return (`
    <tr>
      <td>${token}</td>
      <td>
        <span style="font-family:${fontName}; font-size:20px;">${fontName}</span>
      </td>
    </tr>
    `
  )
}

module.exports = {
  categoryTemplate,
  colorTemplate,
  fontTemplate,
}
