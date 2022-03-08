const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Part1=(props)=>{
    return(
        <p>
        {props.part1} {props.exercises1}
        </p>
    );
}
const Part2=(props)=>{
    return(
                <p>
                {props.part2} {props.exercises2}
                </p>
            );
}
const Part3=(props)=>{
    return(
        <p>
        {props.part3} {props.exercises3}
      </p>
);
}

const Content = () => {
    return (
        <>
           <Part1  part1='Fundamentals of React'
                exercises1={10} />
           <Part2 part2='Using props to pass data'
                exercises2={7} />
           <Part3 part3='State of a component'
                exercises3={14} />
        </>
    );
};

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </>
    );
};

const App = () => {

    return (
        <div>
            <Header course='Half Stack application development' />
            <Content />
            <Total exercises1={10} exercises2={7} exercises3={14} />
        </div>
    );
};

export default App;
