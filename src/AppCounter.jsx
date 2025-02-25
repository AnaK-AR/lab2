import PropTypes from "prop-types";
import {useState} from "react";

export const AppCounter = () => {

    const [counter, setCounter ] = useState(1);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Add 1</button>
            <button className="btn btn-primary" onClick={() => setCounter(counter * 0 )}>Reset</button>
            <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>Sun 1</button>
        </div>
    )
}