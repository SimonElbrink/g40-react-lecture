
import React, {useState} from 'react';

const Counter = () => {
    console.log("Counter Component was rendered")

    const [number, setNumber] = useState(0);

    const IncrementHandler = () =>{

        setNumber(number + 1);
    }

    return (
        <div>
            <h3>{number}</h3>
            <button className='btn btn-success' onClick={IncrementHandler}>Increment</button>
            <button className='btn btn-danger' onClick={() => setNumber(number -1)} >Decrement</button>
            <button className='btn btn-secondary'onClick={() => setNumber(0)}>Reset</button>
        </div>
    );
};

export default Counter;