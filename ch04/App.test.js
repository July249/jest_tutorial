const App = require("./App");

let num = 0;

test("0 더하기 1은 1", () => {
  expect(App.add(num, 1)).toBe(1);
});
test("0 더하기 2은 2", () => {
  expect(App.add(num, 2)).toBe(2);
});
test("0 더하기 3은 3", () => {
  expect(App.add(num, 3)).toBe(3);
});

// 아래 test에 문제가 발생한 이유는 num에 10을 할당하였기 때문이다.
// 하지만 당장은 num을 수정할 수 없는 경우 skip을 이용하여 해당 코드에 대한 테스트를 피하는 방법이 있다.
test.skip("0 더하기 4은 4", () => {
  expect(App.add(num, 4)).toBe(4);
  num = 10;
});
// 일부러 마지막 테스트를 틀리게 만들기는 했지만
// 실전에서는 외부 요인에 의한 실패인지 확인해야할 필요가 있다.
// 해당 오류만 점검하기 위해 only를 test 옆에 붙여야할 필요가 있다.
// test.only("0 더하기 5은 5", () => {
//   expect(App.add(num, 5)).toBe(6);
// });

// test 결과 문제가 없게 수정하였다.
// 하지만, 전체 테스트 결과 에러가 다시 발생하였다.
// 외부 요인에 의한 문제로 판별되었다.
test("0 더하기 5은 5", () => {
  expect(App.add(num, 5)).toBe(5);
});
