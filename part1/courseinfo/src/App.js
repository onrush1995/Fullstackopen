import React, { useState } from 'react';

const History = (props) => {
    const newArray = props.allClicks.map((x) => x);
    console.log(newArray);

    const initialValue = 0;
    const reducer = (accumulator, item) => {
        return accumulator + item;
    };
    const total = props.allClicks.reduce(reducer, initialValue);
    if (props.allClicks.length === 0) {
        return <div>the app is used by pressing the buttons</div>;
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
            <h1>{total}</h1>
        </div>
    );
};

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
    ] = useState([]);

    const handleLeftClick = () => {
        setAll(allClicks.concat(1));
        setLeft(left + 1);
    };

    const handleRightClick = () => {
        setAll(allClicks.concat(-1));
        setRight(right + 1);
    };

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <History allClicks={allClicks} />
        </div>
    );
};

export default App;
