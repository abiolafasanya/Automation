import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../Calculator";

describe("Calculator Component", () => {
  it("renders calculator heading", () => {
    render(<Calculator />);
    expect(screen.getByText("Simple Calculator")).toBeInTheDocument();
  });

  it("renders input fields", () => {
    render(<Calculator />);
    expect(screen.getByTestId("num1-input")).toBeInTheDocument();
    expect(screen.getByTestId("num2-input")).toBeInTheDocument();
  });

  it("renders operation buttons", () => {
    render(<Calculator />);
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getByText("Subtract")).toBeInTheDocument();
    expect(screen.getByText("Multiply")).toBeInTheDocument();
    expect(screen.getByText("Divide")).toBeInTheDocument();
  });

  it("performs addition correctly", () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId("num1-input");
    const num2Input = screen.getByTestId("num2-input");

    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "3" } });
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByTestId("result")).toHaveTextContent("Result: 8");
  });

  it("performs subtraction correctly", () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId("num1-input");
    const num2Input = screen.getByTestId("num2-input");

    fireEvent.change(num1Input, { target: { value: "10" } });
    fireEvent.change(num2Input, { target: { value: "3" } });
    fireEvent.click(screen.getByText("Subtract"));

    expect(screen.getByTestId("result")).toHaveTextContent("Result: 7");
  });

  it("performs multiplication correctly", () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId("num1-input");
    const num2Input = screen.getByTestId("num2-input");

    fireEvent.change(num1Input, { target: { value: "4" } });
    fireEvent.change(num2Input, { target: { value: "5" } });
    fireEvent.click(screen.getByText("Multiply"));

    expect(screen.getByTestId("result")).toHaveTextContent("Result: 20");
  });

  it("performs division correctly", () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId("num1-input");
    const num2Input = screen.getByTestId("num2-input");

    fireEvent.change(num1Input, { target: { value: "15" } });
    fireEvent.change(num2Input, { target: { value: "3" } });
    fireEvent.click(screen.getByText("Divide"));

    expect(screen.getByTestId("result")).toHaveTextContent("Result: 5");
  });

  it("shows error for invalid input", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByTestId("error")).toHaveTextContent(
      "Please enter valid numbers"
    );
  });

  it("shows error when dividing by zero", () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId("num1-input");
    const num2Input = screen.getByTestId("num2-input");

    fireEvent.change(num1Input, { target: { value: "10" } });
    fireEvent.change(num2Input, { target: { value: "0" } });
    fireEvent.click(screen.getByText("Divide"));

    expect(screen.getByTestId("error")).toHaveTextContent(
      "Cannot divide by zero"
    );
  });
});
