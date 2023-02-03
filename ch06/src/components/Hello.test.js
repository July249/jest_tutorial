import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Tom",
  age: 30,
};

const user2 = {
  age: 20,
};

test("snapshot: name 있음", () => {
  const view = render(<Hello user={user} />);
  expect(view).toMatchSnapshot();
});
test("snapshot: name 없음", () => {
  const view = render(<Hello user={user2} />);
  expect(view).toMatchSnapshot();
});
// user가 없음에 따라 에러가 발생한다.
// 하지만 여기서 바로 snapshot을 업데이트를 하면 에러가 사라진다.
// 이로 인해 잘못 진행한 업데이트는 버그가 존재하는 상태에서 테스트를 지속하게 된다!
test("snapshot: user 없음", () => {
  const view = render(<Hello />);
  expect(view).toMatchSnapshot();
});

test("Hello 라는 글자가 포함되는가?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
