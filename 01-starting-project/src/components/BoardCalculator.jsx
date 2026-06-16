export default function BoardCalculator( {onChangeInputs, userInputBoard} ) {  
  
  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input
                    type="number"
                    required
                    value={userInputBoard.initialInvestment}
                    onChange={(event) => onChangeInputs('initialInvestment', event.target.value)}
                 />                
            </p>
            <p>
                <label>Annual Investment</label>
                <input
                    type="number"
                    required
                    value={userInputBoard.annualInvestment}
                    onChange={(event) => onChangeInputs('annualInvestment', event.target.value)}
                 />                
            </p>
        </div>
        
        <div className="input-group">
                <p>
                <label>Expected Return</label>
                <input
                    type="number"
                    required
                    value={userInputBoard.expectedReturn}
                    onChange={(event) => onChangeInputs('expectedReturn', event.target.value)}
                 />                
            </p>
            <p>
                <label>Duration Investment</label>
                <input
                    type="number"
                    required
                    value={userInputBoard.duration}
                    onChange={(event) => onChangeInputs('duration', event.target.value)}
                 />                
            </p>      
        </div>                
        
    </section>
  );
}