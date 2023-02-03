// Matchers
const App = require("./App");

// toBe vs. toEqual
// toBe
test("2 더하기 3은 5", () => {
  expect(App.add(2, 3)).toBe(5);
});

// toEqual
test("2 더하기 3은 5", () => {
  expect(App.add(2, 3)).toEqual(5);
});

// toBe로 객체 반환 테스트 코드 작성 => 실패! why?
/*
  객체나 배열은 재귀적으로 돌면서 값을 확인해야 하기 때문에 toEqual을 사용해여함
*/
// test("이름과 나이를 전달받아서 객체를 반환", () => {
//   expect(App2.makeUser("Mike", 30)).toBe({
//     name: "Mike",
//     age: 30,
//   });
// });

// 성공!
test("이름과 나이를 전달받아서 객체를 반환", () => {
  expect(App.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

// toEqual vs. toStrictEqual
test("이름과 나이를 전달받아서 객체를 반환", () => {
  expect(App.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

// test("이름과 나이를 전달받아서 객체를 반환", () => {
//   expect(App.makeUser2("Mike", 30)).toEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("이름과 나이를 전달받아서 객체를 반환", () => {
//   expect(App.makeUser2("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   });
// });
// => toEqual은 undefined를 가진 gender 프로퍼티 키를 무시하고 지나간다.
// => toStrictEqual은 deep equality를 가져야 한다!
// 따라서 toStrictEqual 사용을 지양한다.

/* 
  toBeNull
  toBeUndefined
  toBeDefined
*/

test("null은 null 입니다.", () => {
  expect(null).toBeNull();
});

test("undefined은 undefined 입니다.", () => {
  expect(undefined).toBeUndefined();
});

test("a는 정의된 값입니다.", () => {
  expect(App.a).toBeDefined();
});

/* 
  toBeTruthy
  toBeFalsy
*/
test("1은 true 입니다.", () => {
  expect(App.add(2, -1)).toBeTruthy();
});

test("0은 false 입니다.", () => {
  expect(App.add(1, -1)).toBeFalsy();
});

// test("0은 false 입니다.", () => {
//   expect(App.add("hello", "world")).toBeFalsy();
// });

test("비어있지 않은 문자열은 true 입니다.", () => {
  expect(App.add("hello", "world")).toBeTruthy();
});

/* 
  toBeGreaterThan 크다
  toBeGreaterThanOrEqual 크거나 같다
  toBe (or toEqual) 같다
  toBeLessThan 작다
  toBeLessThanOrEqual 작거나 같다
*/
// test("ID는 10자 이하여야 합니다.", () => {
//   const id = "THE_BLACK_ORDER";
//   expect(id.length).toBeLessThanOrEqual(10);
// });
test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호는 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("비밀번호는 4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

// toBeCloseTo (근사값으로 같다)
// test("0.1 더하기 0.2는 0.3 입니다.", () => {
//   expect(App.add(0.1, 0.2)).toBe(0.3);
// });
test("0.1 더하기 0.2는 0.3 입니다.", () => {
  expect(App.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// toMatch() <= 소괄호 안에는 정규표현식을 넣어 준다.
// test("Hello World 안에 a 라는 글자가 있나요?", () => {
//   expect("Hello World").toMatch(/a/);
// });
test("Hello World 안에 H 라는 글자가 있나요?", () => {
  expect("Hello World").toMatch(/H/);
});
// test("Hello World 안에 h 라는 글자가 있나요?", () => {
//   expect("Hello World").toMatch(/h/);
// });
// => toMatch 는 대소문자를 구분한다!
// => 대소문자 구분이 없게 하려면 정규표현식에서의 i를 사용!
test("Hello World 안에 h 라는 글자가 있나요?", () => {
  expect("Hello World").toMatch(/h/i);
});

// toContain() => 포함여부 판단
// test("유저 리스트에 Mike가 있나요?", () => {
//   const user = "Mike";
//   const userList = ["Tom", "Jane", "Kai"];
//   expect(userList).toContain(user);
// });
test("유저 리스트에 Mike가 있나요?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

// toThrow() => 어떤 에러이든 무조건 반환됨
test("이거 에러 나나요?", () => {
  expect(() => App.throwErr()).toThrow();
});
// 특정 에러에만 반환하도록 하려면 ..
// test("이거 에러 나나요?", () => {
//   expect(() => App.throwErr()).toThrow("oo");
// });
// => "oo"가 아닌 "xx"가 반환되었기 때문에 fail됨
test("이거 에러 나나요?", () => {
  expect(() => App.throwErr()).toThrow("xx");
});
