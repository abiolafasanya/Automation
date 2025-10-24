import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  it("renders with children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByTestId("custom-button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders primary variant by default", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByTestId("custom-button");
    expect(button.className).toContain("primary");
  });

  it("renders secondary variant when specified", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByTestId("custom-button");
    expect(button.className).toContain("secondary");
  });

  it("renders danger variant when specified", () => {
    render(<Button variant="danger">Danger</Button>);
    const button = screen.getByTestId("custom-button");
    expect(button.className).toContain("danger");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByTestId("custom-button");
    expect(button).toBeDisabled();
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );

    fireEvent.click(screen.getByTestId("custom-button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders correct button type", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByTestId("custom-button");
    expect(button).toHaveAttribute("type", "submit");
  });
});
