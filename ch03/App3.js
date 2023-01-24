const App3 = {
  add: (num1, num2) => num1 + num2,
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getNameWithErr: (callBack) => {
    const name = "Mike";
    setTimeout(() => {
      // callback(name)
      throw new Error("서버 에러...");
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age);
      }, 3000);
    });
  },
  getAgeWithReject: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error");
      }, 3000);
    });
  },
};

module.exports = App3;
