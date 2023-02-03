// mock function
const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40);

mockFn();
mockFn();
mockFn();
mockFn();

test("dd", () => {
  console.log(mockFn.mock.results);
  expect("dd").toBe("dd");
});
