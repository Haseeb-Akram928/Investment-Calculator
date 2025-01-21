import { useState } from "react";
import Header from "./Header.jsx";
import Input from "./Input";
import Results from "./Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifer, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifer]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Input userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a valid duration (1 year or more)</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
