const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    );
};

const Content = (props) => {
    return (
        <>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
        </>
    );
};

const Total = (props) => {
    return <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>;
};

const App = () => {
    const info = {
        course: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
            },
            {
                name: 'State of a component',
                exercises: 14,
            },
        ],
    };

    return (
        <>
            <Header course={info.course} />
            <Content parts={info.parts} />
            <Total exercises={info.parts.map((part) => part.exercises)} />
        </>
    );
};

export default App;
