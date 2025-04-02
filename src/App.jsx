import { useState } from "react";
import { UserInput } from "./components/UserInput";
import { Result } from "./components/Result";

export default function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000000,
    monthly: 50000,
    years: 10,
    scenario: "default",
  });
  function handleInput(inputIdentifier, newValue) {
    setInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]:
          inputIdentifier === "scenario" ? newValue : +newValue,
      };
    });
  }

  return (
    <>
      <section className="max-w-[50rem] space-y-2 mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <h1 className="font-['Roboto Condensed'] text-2xl font-bold  text-gray-800">
            Calcuvest - Wealth Accumulation Calculator
          </h1>

          <UserInput userInput={input} onChange={handleInput} />
          <Result input={input} />
        </div>
      </section>
    </>
  );
}
