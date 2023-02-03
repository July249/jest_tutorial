import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  // 고정된 값으로 목함수를 만들어 테스트를 진행하면 통과하게 된다.
  Date.now = jest.fn(() => 123456789);
  // 매 초마다 실행결과가 달라지기 때문에 스냅샷을 업데이트 하는 것은 에러를 해결하기 위한 본질적인 방법이 아니다.
  const view = render(<Timer />);
  expect(view).toMatchSnapshot();
});
