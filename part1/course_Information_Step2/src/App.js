import React, { useState } from 'react';

// StatisticLine for displaying a single statistic, e.g. the average score.

const StatisticLine = ({ Average }) => {
    return (
        <div>
            <p>Average: {Average}</p>
        </div>
    );
};

const PositiveStatisticLine = ({ Positive }) => {
    return (
        <div>
            <p>Positive : {Positive} %</p>
        </div>
    );
};

const AllStatisticLine = ({ All }) => {
    return (
        <div>
            <p>All {All} </p>
        </div>
    );
};

const Good = ({ Good }) => {
    return (
        <div>
            <p>Good {Good} </p>
        </div>
    );
};

const Bad = ({ Bad }) => {
    return (
        <div>
            <p>Bad {Bad} </p>
        </div>
    );
};

const Neutral = ({ Neutral }) => {
    return (
        <div>
            <p>Neutral {Neutral} </p>
        </div>
    );
};

const Statistics = ({ good, bad, neutral, goodrep, badrep, neutralrep }) => {
    const All = good + bad + neutral;
    const Average = (goodrep + badrep + neutralrep) / (good + bad + neutral);
    const Positive = goodrep / (good + bad + neutral) * 100;

    if (All === 0) {
        return <div>No feedback given</div>;
    }
    return (
        <div>
            <h1>Statistics</h1>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <Good text='good' Good={good} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Bad text='bad' Bad={bad} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Neutral text='neutral' Neutral={neutral} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <AllStatisticLine text='all' All={All} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StatisticLine text='average' Average={Average} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <PositiveStatisticLine Positive={Positive} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// Button for defining the buttons used for submitting feedback

const GoodButton = ({ handleClick }) => {
    return (
        <div>
            <button className='goodButton' onClick={handleClick}>
                Good
            </button>
        </div>
    );
};

const BadButton = ({ handleClick }) => {
    return (
        <div>
            <button className='badButton' onClick={handleClick}>
                Bad
            </button>
        </div>
    );
};

const NeutralButton = ({ handleClick }) => {
    return (
        <div>
            <button className='neutralButton' onClick={handleClick}>
                Neutral
            </button>
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
            <GoodButton handleClick={goodHandleClick} />
            <BadButton handleClick={badHandleClick} />
            <NeutralButton handleClick={neutralHandleClick} />
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
