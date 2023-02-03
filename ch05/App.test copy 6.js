// mock function
const mockFn = jest.fn();

// 비동기 함수처럼 만들기
mockFn.mockResolvedValue({ name: "Mike" });

test("받아온 이름은 Mike", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});
