import { useState } from "react";
import Header from "./components/header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInput(inputIndentifier, newValue) {
    setInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue,
      };
    });
  }
  const inputIsValid = input.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={input} onChange={handleInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result input={input} />}
    </>
  );
}

export default App;
