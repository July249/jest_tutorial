const App = require("./App");

let user;

// beforeEach(async () => {
//   user = await App.connectUserDb();
// });
// afterEach(() => {
//   return App.disconnectDb();
// });

// => 데이터를 불러와서 수행하는 작업을 매번 하는 것이 아니라
//    최초에 데이터를 불러오고, 맨 마지막에 연결을 끊어야 한다!
beforeAll(async () => {
  user = await App.connectUserDb();
});
afterAll(() => {
  return App.disconnectDb();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});
test("나이는 30", () => {
  expect(user.age).toBe(30);
});
test("성별은 남자", () => {
  expect(user.gender).toBe("male");
});

describe("Car 관련 작업", () => {
  let car;

  beforeAll(async () => {
    car = await App.connectCarDb();
  });
  afterAll(() => {
    return App.disconnectDb();
  });

  test("자동차는 Z4", () => {
    expect(car.name).toBe("Z4");
  });
  test("브랜드는 bmw", () => {
    expect(car.brand).toBe("BMW");
  });
  test("색상은 red", () => {
    expect(car.color).toBe("red");
  });
});
