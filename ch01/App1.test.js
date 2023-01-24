const App1 = require("./App1");

test("1은 1이야", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5", () => {
  expect(App1.add(2, 3)).toBe(5);
});

// test("2 더하기 3은 6", () => {
//   expect(App.add(2, 3)).toBe(6);
// });

test("2 더하기 3은 6이 아님", () => {
  expect(App1.add(2, 3)).not.toBe(6);
});
