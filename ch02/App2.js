const App2 = {
  a: 1,
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  // makeUser2: (name, age) => ({ name, age, gender: undefined }),

  // 예외처리
  throwErr: () => {
    throw new Error("xx");
  },
};

module.exports = App2;
