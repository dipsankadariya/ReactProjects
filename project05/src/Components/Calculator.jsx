import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="container">
      <input type="text" placeholder="0" value={input} readOnly />
      <div>
        <button onClick={() =>
             handleClick("7")}>7</button>
        <button onClick={() =>
             handleClick("8")}>8</button>
        <button onClick={() =>
             handleClick("9")}>9</button>
        <button onClick={() =>
             handleClick("/")}>/</button>
        <button onClick={() =>
             handleClick("4")}>4</button>
        <button onClick={() =>
             handleClick("5")}>5</button>
        <button onClick={() =>
             handleClick("6")}>6</button>
        <button onClick={() =>
             handleClick("-")}>-</button>
        <button onClick={() =>
             handleClick("3")}>3</button>
        <button onClick={() =>
             handleClick("2")}>2</button>
        <button onClick={() =>
             handleClick("1")}>1</button>
        <button onClick={() =>
             handleClick("+")}>+</button>
        <button onClick={() =>
             handleClick("0")}>0</button>
        <button onClick={() =>
             handleClick(".")}>.</button>
        <button onClick={() =>
             handleClick("=")}>=</button>
        <button onClick={() =>
             handleClick("C")}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
