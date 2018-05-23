const categoryTemplate = obj => {
  return `
    <h2>${obj.category}</h2>
    <table>
    <tr>
      <th>Token key</th>
      <th>Value</th>
    </tr>
    ${obj.list}
    </table>
  `;
};

const colorTemplate = (token, color) => {
  return (`
  <tr>
  <td>${token}</td>
  <td>
    <div style="background-color:${color}">${color}</div>
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
