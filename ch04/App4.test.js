const App4 = require("./App4");

let num = 0;

test("0 더하기 1은 1이야", () => {
  num = App4.add(num, 1);
  expect(num).toBe(1);
});
