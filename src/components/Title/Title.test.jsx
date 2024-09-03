import { render } from "@testing-library/react";
import Title from "./Title";

test("renders h2 element with correct text", () => {
  const { getByText } = render(<Title />);
  const titleElement = getByText("Title");
  expect(titleElement.tagName).toBe("h2");
});
