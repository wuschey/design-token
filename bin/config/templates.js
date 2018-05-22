const colorTemplate = obj => {
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

const colorTileTemplate = (token, color) => {
  return (`
  <tr>
  <td>${token}</td>
  <td>
    <div style="background-color:${color}">${color}</div>
  </td>
  </tr>
    `)
}

module.exports = {
  colorTemplate,
  colorTileTemplate
}
