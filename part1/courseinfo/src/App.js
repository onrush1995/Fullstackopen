import React, { useState } from 'react';

const App = () => {
    const [
        left,
        setLeft
    ] = useState(0);
    const [
        right,
        setRight
    ] = useState(0);
    const [
        allClicks,
        setAll
    ] = useState((a) => (a += 1));

    const handleLeftClick = () => {
        setAll(allClicks);
        setLeft(left + 1);
    };

    const handleRightClick = () => {
        setAll(allClicks);
        setRight(right + 1);
    };

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks}</p>
        </div>
    );
};

export default App;
