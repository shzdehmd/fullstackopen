const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Part = (props) => {
    return (
        <p>
            {props.name} {props.count}
        </p>
    );
};

const Content = (props) => {
    return (
        <>
            <Part name={props.coursework[0][0]} count={props.coursework[0][1]} />
            <Part name={props.coursework[1][0]} count={props.coursework[1][1]} />
            <Part name={props.coursework[2][0]} count={props.coursework[2][1]} />
        </>
    );
};

const Total = (props) => {
    return <p>Number of exercises {props.coursework[0][1] + props.coursework[1][1] + props.coursework[2][1]}</p>;
};

const App = () => {
    const course = 'Half Stack application development';
    const coursework = [
        ['Fundamentals of React', 10],
        ['Using props to pass data', 7],
        ['State of a component', 14],
    ];

    return (
        <>
            <Header course={course} />
            <Content coursework={coursework} />
            <Total coursework={coursework} />
        </>
    );
};

export default App;
