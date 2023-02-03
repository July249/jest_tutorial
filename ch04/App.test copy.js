const App = require("./App");

let num = 10;

// 테스트 전에 동작하는 콜백함수
// beforeEach(() => {
//   num = 0;
// });

// 테스트 후에 동작하는 콜백함수
afterEach(() => {
  num = 0;
});

// 하기의 코드는 num을 계속 갱신시키기 때문에 에러가 발생하였다.
// 따라서 num의 갱신이 없이 0으로 num 값이 계속 유지되기 위해서는 테스트 전에 초기화 해줘야 한다.
test("0 더하기 1은 1이야", () => {
  num = App.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 2은 2이야", () => {
  num = App.add(num, 2);
  expect(num).toBe(2);
});

test("0 더하기 3은 3이야", () => {
  num = App.add(num, 3);
  expect(num).toBe(3);
});

test("0 더하기 4은 4이야", () => {
  num = App.add(num, 4);
  expect(num).toBe(4);
});
