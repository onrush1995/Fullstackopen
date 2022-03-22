import React, { useState } from 'react';

const Statistics = ({ good, bad, neutral }) => {
    return (
        <div>
            <h1>Statistics</h1>
            <p>Good {good}</p>
            <p>Bad {bad}</p>
            <p>Neutral {neutral}</p>
        </div>
    );
};
const App = () => {
    const [
        good,
        setGood
    ] = useState(0);
    const [
        neutral,
        setNeutral
    ] = useState(0);
    const [
        bad,
        setBad
    ] = useState(0);

    const goodHandleClick = () => {
        onclick = () => setGood(good + 1);
    };

    const badHandleClick = () => {
        onclick = () => setBad(bad + 1);
    };

    const neutralHandleClick = () => {
        onclick = () => setNeutral(neutral + 1);
    };
    return (
        <div>
            <h1>Giving feedback</h1>
            <button className='goodButton' onClick={goodHandleClick}>
                Good
            </button>

            <button className='badButton' onClick={badHandleClick}>
                Bad
            </button>
            <button className='neutralButton' onClick={neutralHandleClick}>
                neutral
            </button>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    );
};

export default App;
