const TestFunctions = require("./TestFunctions");

test("1은 1이야", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5", () => {
  expect(TestFunctions.add(2, 3)).toBe(5);
});

// test("2 더하기 3은 6", () => {
//   expect(TestFunctions.add(2, 3)).toBe(6);
// });

test("2 더하기 3은 6이 아님", () => {
  expect(TestFunctions.add(2, 3)).not.toBe(6);
});
