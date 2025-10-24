import { add, subtract, multiply, divide, calculatePercentage } from "../math";

describe("Math Utils", () => {
  describe("add", () => {
    it("should add two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("should add negative numbers", () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it("should add positive and negative numbers", () => {
      expect(add(5, -3)).toBe(2);
    });
  });

  describe("subtract", () => {
    it("should subtract two positive numbers", () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it("should subtract negative numbers", () => {
      expect(subtract(-5, -3)).toBe(-2);
    });
  });

  describe("multiply", () => {
    it("should multiply two positive numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it("should multiply by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it("should multiply negative numbers", () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe("divide", () => {
    it("should divide two positive numbers", () => {
      expect(divide(6, 2)).toBe(3);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });

    it("should divide negative numbers", () => {
      expect(divide(-6, 2)).toBe(-3);
    });
  });

  describe("calculatePercentage", () => {
    it("should calculate percentage correctly", () => {
      expect(calculatePercentage(50, 200)).toBe(25);
    });

    it("should throw error when total is zero", () => {
      expect(() => calculatePercentage(50, 0)).toThrow("Total cannot be zero");
    });

    it("should handle 100%", () => {
      expect(calculatePercentage(100, 100)).toBe(100);
    });
  });
});
