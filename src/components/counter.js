import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = (event, extra) => {
        console.log(event.target)
        console.log("Increment Button clicked");
        console.log(extra);
        // counter = counter + 1;
        setCounter(counter + 1)
        console.log("Counter value:", counter);
    }

    const handleDecrement = (event) => {
        console.log(event.target)
        console.log("Decrement Button clicked");
        // counter = counter - 1;
        setCounter(counter - 1)
        console.log("Counter value:", counter);
    }

    return (
        <div className="counter">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={(event) => handleIncrement(event, "extra params")}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <p>Counter value: {counter}</p>
        </div>
    )
}

export default Counter;