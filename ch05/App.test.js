const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalled();
});
test("정확히 세번 호출?", () => {
  expect(mockFn).toBeCalledTimes(3);
});
test("10이랑 20 전달받은 함수가 있는가?", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});
// 30과 40을 전달하여도 에러는 발생하지 않는다.
// 즉, 입력된 인수를 받은 함수가 있기만 하면 된다는 것!
test("10이랑 20 전달받은 함수가 있는가?", () => {
  expect(mockFn).toBeCalledWith(30, 40);
});
test("마지막 함수는 30이랑 40 받았음?", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
// 아래 함수는 에러가 발생한다.
// 마지막에 실행된 함수의 인수만 바라보기 때문이다.
test("마지막 함수는 30이랑 40 받았음?", () => {
  expect(mockFn).lastCalledWith(10, 20);
});
