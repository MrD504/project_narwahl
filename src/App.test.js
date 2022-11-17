import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

const customRender = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

test("renders learn react link", () => {
  customRender(<App />);
  const linkElement = screen.getByText(/account/i);
  expect(linkElement).toBeInTheDocument();
});
