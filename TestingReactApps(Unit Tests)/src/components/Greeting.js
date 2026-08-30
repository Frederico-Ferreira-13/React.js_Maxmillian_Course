import { useState } from 'react';

import OutPut from './Output';

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <OutPut>It's good to see you!</OutPut>}
            {changedText && <OutPut>Changed!</OutPut>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
};

export default Greeting;