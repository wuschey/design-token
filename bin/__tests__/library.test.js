const TokenLibrary = require("../TokenLibrary");
const testToken = [
  {
    global: { type: "color", category: "backgrounds" },
    colors: {
      color_white: {
        value: "#FFFFFF",
        name: "Color White"
      }
    },
    props: {
      "color-background": {
        value: "#FFFFFF",
        name: "Color White"
      }
    }
  }
];

const tl = new TokenLibrary(testToken);


test('setting token array', () =>{
  tl.setTokenData(testToken);
  expect(tl._arrToken).toHaveLength(1);
});

test('getting template type', () =>{
  expect(tl.getTemplate('color')).toBeDefined();
})
// test("write Data Object", () => {
// //   // const tl = new TokenLibrary(testToken);
//   const dataObj = tl.writeDataObject('color_white', testToken);
// //   expect(dataObj.tokenName).toBeDefined();
// });
