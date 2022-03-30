import { useState } from 'react';

const App = () => {
    const anecdotes = [
        {
            id: 0,
            quote: 'If it hurts, do it more often'
        },
        {
            id: 1,
            quote: 'Adding manpower to a late software project makes it later!'
        },
        {
            id: 2,
            quote:
                'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'
        },
        {
            id: 3,
            quote:
                'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'
        },
        {
            id: 4,
            quote: 'Premature optimization is the root of all evil.'
        },
        {
            id: 5,
            quote:
                'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
        },
        {
            id: 6,
            quote:
                'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
        }
    ];

    const [
        selected,
        setSelected
    ] = useState(0);

    const [
        vote,
        setVote
    ] = useState([]);

    const [
        totalVote,
        setTotalVote
    ] = useState(0);

    const [
        inTotal,
        setInTotal
    ] = useState([]);

    const rpt = vote.reduce((cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt), {});

    console.log(inTotal);

    const handleClick = () => {
        const minimum = 0;
        const maximum = anecdotes.length;
        const randomnumber = Math.floor(Math.random() * (maximum - minimum)) + minimum;
        setSelected(randomnumber);
    };

    const voteCount = () => {
        setVote(vote.concat(idNumber));
        setTotalVote(totalVote + 1);
        setInTotal(rpt);
    };
    const selectedQuote = anecdotes[selected].quote;
    const idNumber = anecdotes[selected].id;

    return (
        <div>
            <h1>{selectedQuote}</h1>
            <button onClick={handleClick}>Next Anecdotes</button>
            <button onClick={voteCount}>Vote</button>
            <h1>{vote.length} vote has been given</h1>
            <h1>
                {selectedQuote} is carriedout this id {idNumber}
            </h1>
        </div>
    );
};

export default App;
