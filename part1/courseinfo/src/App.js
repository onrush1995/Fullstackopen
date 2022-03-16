import { useState } from 'react';

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const App = () => {
    const [
        counter,
        setCounter
    ] = useState(0);

    const increment = () => setCounter(counter + 1);

    const decrement = () => setCounter(counter - 1);

    const zero = () => setCounter(0);

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={increment} name='+' />
            <Button onClick={decrement} name='-' />
            <Button onClick={zero} name='0' />
        </div>
    );
};

export default App;
