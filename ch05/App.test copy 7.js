const App = require("./App");

jest.mock("./App");

// 아래 코드를 실행하면 로그가 찍히지 않는다.
// 실제로 사용자가 생성되지는 않는다.
App.createUser.mockReturnValue({ name: "Mike" });

// 아래 코드를 실행하면 로그가 찍힌다.
test("사용자를 만든다.", () => {
  const user = App.createUser("Mike");
  expect(user.name).toBe("Mike");
});
