// mock function
const mockFn = jest.fn();
mockFn();
mockFn(1);

// mock.calls
test("dd", () => {
  console.log(mockFn.mock.calls);
  expect("dd").toBe("dd");
});
/**
 * [ [], [ 1 ] ]
 */

test("함수는 2번 호출됩니다.", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});
test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
