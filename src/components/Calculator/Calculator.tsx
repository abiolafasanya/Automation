import React, { useState } from "react";
import { add, subtract, multiply, divide } from "@/utils/math";
import Button from "../Button/Button";
import styles from "./Calculator.module.css";

export default function Calculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleOperation = (operation: string) => {
    setError("");
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError("Please enter valid numbers");
      return;
    }

    try {
      let res: number;
      switch (operation) {
        case "add":
          res = add(a, b);
          break;
        case "subtract":
          res = subtract(a, b);
          break;
        case "multiply":
          res = multiply(a, b);
          break;
        case "divide":
          res = divide(a, b);
          break;
        default:
          return;
      }
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className={styles.calculator}>
      <h2>Simple Calculator</h2>
      <div className={styles.inputs}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          data-testid="num1-input"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          data-testid="num2-input"
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => handleOperation("add")}>Add</Button>
        <Button onClick={() => handleOperation("subtract")} variant="secondary">
          Subtract
        </Button>
        <Button onClick={() => handleOperation("multiply")}>Multiply</Button>
        <Button onClick={() => handleOperation("divide")} variant="secondary">
          Divide
        </Button>
      </div>
      {result !== null && (
        <div className={styles.result} data-testid="result">
          Result: {result}
        </div>
      )}
      {error && (
        <div className={styles.error} data-testid="error">
          {error}
        </div>
      )}
    </div>
  );
}
