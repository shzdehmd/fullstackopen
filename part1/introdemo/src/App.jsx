import Footer from './Footer';

const Hello = (props) => {
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    );
};

const App = () => {
    const name = 'Zainab';
    const age = 18;

    const friends = [
        { name: 'Ahmad', age: 26 },
        { name: 'Zainab', age: 18 },
    ];

    return (
        <>
            <h1>Greetings</h1>
            <Hello name={friends[0].name} age={friends[0].age} />
            <Hello name={friends[1].name} age={friends[1].age} />
            <Footer />
        </>
    );
};

export default App;
