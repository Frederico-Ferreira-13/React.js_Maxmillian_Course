import { useState } from 'react';

import BoardCalculator from './components/BoardCalculator.jsx'
import Header from './components/Header.jsx'
import ResultsTable from './components/ResultsTable.jsx';


function App() {
   const [userInputs, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInputs.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preveUserInput) => {
        return {
            ...preveUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }  

  return (
    <>
      <Header />
      <BoardCalculator userInputBoard={userInputs} onChangeInputs={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid duration (at least 1 year).</p> }
      {inputIsValid && <ResultsTable input={userInputs} />}
    </>
  );
}

export default App
