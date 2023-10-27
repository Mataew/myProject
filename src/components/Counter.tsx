import {useState} from "react";
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }


    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={increment}>increment</button>
            </div>
        </>
    );
};

export default Counter;