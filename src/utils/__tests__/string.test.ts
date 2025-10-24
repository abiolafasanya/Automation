import { capitalize, truncate, slugify, reverseString } from "../string";

describe("String Utils", () => {
  describe("capitalize", () => {
    it("should capitalize first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("should handle empty string", () => {
      expect(capitalize("")).toBe("");
    });

    it("should convert rest to lowercase", () => {
      expect(capitalize("hELLO")).toBe("Hello");
    });
  });

  describe("truncate", () => {
    it("should truncate long strings", () => {
      expect(truncate("Hello World", 5)).toBe("Hello...");
    });

    it("should not truncate short strings", () => {
      expect(truncate("Hi", 5)).toBe("Hi");
    });

    it("should handle exact length", () => {
      expect(truncate("Hello", 5)).toBe("Hello");
    });
  });

  describe("slugify", () => {
    it("should convert to lowercase slug", () => {
      expect(slugify("Hello World")).toBe("hello-world");
    });

    it("should remove special characters", () => {
      expect(slugify("Hello @ World!")).toBe("hello-world");
    });

    it("should handle multiple spaces", () => {
      expect(slugify("Hello   World")).toBe("hello-world");
    });

    it("should trim leading/trailing dashes", () => {
      expect(slugify("  Hello World  ")).toBe("hello-world");
    });
  });

  describe("reverseString", () => {
    it("should reverse a string", () => {
      expect(reverseString("hello")).toBe("olleh");
    });

    it("should handle empty string", () => {
      expect(reverseString("")).toBe("");
    });

    it("should handle single character", () => {
      expect(reverseString("a")).toBe("a");
    });
  });
});
