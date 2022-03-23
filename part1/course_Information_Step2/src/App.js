import React, { useState } from 'react';

const Statistics = ({ good, bad, neutral, goodrep, badrep, neutralrep }) => {
    return (
        <div>
            <h1>Statistics</h1>
            <p>Good {good}</p>
            <p>Bad {bad}</p>
            <p>Neutral {neutral}</p>
            <p>All {good + bad + neutral}</p>
            <p>Average: {(goodrep + badrep + neutralrep) / (good + bad + neutral)}</p>
            <p>Positive : {goodrep / (good + bad + neutral) * 100} %</p>
        </div>
    );
};

const App = () => {
    //  Good score count
    const [
        good,
        setGood
    ] = useState(0);

    const [
        goodrep,
        setGoodrep
    ] = useState(0);

    //  Neutral score count
    const [
        neutral,
        setNeutral
    ] = useState(0);

    const [
        neutralrep,
        setNeutralrep
    ] = useState(0);

    //  Bad score count
    const [
        bad,
        setBad
    ] = useState(0);

    const [
        badrep,
        setBadrep
    ] = useState(0);

    // Click count
    const goodHandleClick = () => {
        setGood(good + 1);
        setGoodrep((prevState) => prevState + 1);
    };

    const badHandleClick = () => {
        setBad(bad + 1);
        setBadrep((prevState) => prevState - 1);
    };

    const neutralHandleClick = () => {
        setNeutral(neutral + 1);
        setNeutralrep((prevState) => prevState + 0);
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
                Neutral
            </button>
            <Statistics
                good={good}
                bad={bad}
                neutral={neutral}
                goodrep={goodrep}
                badrep={badrep}
                neutralrep={neutralrep}
            />
        </div>
    );
};

export default App;
