// const App = require("./App");

// test("3초 후에 받아온 이름은 Mike", () => {
//   function callBack(name) {
//     expect(name).toBe("Mike");
//   }
//   App.getName(callBack);
// });

// test("3초 후에 받아온 이름은 Mike", () => {
//   function callBack(name) {
//     expect(name).toBe("Tom");
//   }
//   App.getName(callBack);
// });
// => 통과가 된다고?! 뭔가 이상한데?
// => 동작 시간도 3초가 안된다고?!
// => 비동기로 테스트가 진행되지 않는 것이 분명해!

// done 이라고 하는 콜백 함수를 전달하면 해결됨!
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callBack(name) {
//     expect(name).toBe("Mike");
//     done();
//   }
//   App.getName(callBack);
// });
// done이 호출되기 전까지는 종료되지 않고 기다리게 됨

// API의 에러를 감지하고 싶은 경우에는 try-catch
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callBack(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   App.getNameWithErr(callBack);
// });

// Promise를 사용하는 방법 - resolve, reject
// test("3초 후에 받아온 나이는 30", () => {
//   App.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });
// return을 빼먹으면 그냥 통과해버린다.
// test("3초 후에 받아온 나이는 30", () => {
//   return App.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });

// Promise를 사용하는 방법 - resolves, rejects matcher 사용
// test("3초 후에 받아온 나이는 30", () => {
//   return expect(App.getAge()).resolves.toBe(30);
// });
// test("3초 후에 에러가 발생합니다.", () => {
//   return expect(App.getAgeWithReject()).rejects.toMatch("error");
// });

// Async - Await 방식
// test("3초 후에 받아온 나이는 30", async () => {
//   const age = await App.getAge();
//   expect(age).toBe(30);
// });
// test("3초 후에 받아온 나이는 30", async () => {
//   await expect(App.getAge()).resolves.toBe(30);
// });
// test("3초 후에 에러가 발생합니다.", async () => {
//   await expect(App.getAgeWithReject()).rejects.toMatch("error");
// });
