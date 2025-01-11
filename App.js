import React, { useState } from "react";
import './App.css';

const App = () => {
  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        // Evaluate the expression
        const evaluatedResult = eval(expression);
        setResult(evaluatedResult);
        setInput(evaluatedResult);
        setExpression("");
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "clear") {
      setInput("0");
      setExpression("");
      setResult(null);
    } else if (value === ".") {
      // Prevent multiple decimals in one number
      if (!input.includes(".")) {
        setInput(input + ".");
        setExpression(expression + ".");
      }
    } else {
      if (input === "0" && value !== "0") {
        setInput(value);
      } else {
        setInput(input + value);
      }

      setExpression(expression + value);
    }
  };

  return (
    <div id="calculator">
      <Display value={input} />
      <div className="buttons">
        <Button id="clear" value="clear" onClick={() => handleButtonClick("clear")} />
        <Button id="divide" value="/" onClick={() => handleButtonClick("/")} />
        <Button id="multiply" value="*" onClick={() => handleButtonClick("*")} />
        <Button id="seven" value="7" onClick={() => handleButtonClick("7")} />
        <Button id="eight" value="8" onClick={() => handleButtonClick("8")} />
        <Button id="nine" value="9" onClick={() => handleButtonClick("9")} />
        <Button id="subtract" value="-" onClick={() => handleButtonClick("-")} />
        <Button id="four" value="4" onClick={() => handleButtonClick("4")} />
        <Button id="five" value="5" onClick={() => handleButtonClick("5")} />
        <Button id="six" value="6" onClick={() => handleButtonClick("6")} />
        <Button id="add" value="+" onClick={() => handleButtonClick("+")} />
        <Button id="one" value="1" onClick={() => handleButtonClick("1")} />
        <Button id="two" value="2" onClick={() => handleButtonClick("2")} />
        <Button id="three" value="3" onClick={() => handleButtonClick("3")} />
        <Button id="decimal" value="." onClick={() => handleButtonClick(".")} />
        <Button id="zero" value="0" onClick={() => handleButtonClick("0")} />
        <Button id="equals" value="=" onClick={() => handleButtonClick("=")} />
      </div>
    </div>
  );
};

const Display = ({ value }) => <div id="display">{value}</div>;

const Button = ({ id, value, onClick }) => (
  <button id={id} onClick={() => onClick(value)}>
    {value}
  </button>
);

export default App;
