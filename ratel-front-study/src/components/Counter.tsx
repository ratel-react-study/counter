import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState<number | null>(0)

    return (
        <div className="card">
            <button onClick={() => setCount(count - 0.25)} disabled = {count <= -15}>
                -
            </button>
            <p>
                {count !== null ? count.toFixed(2) : "0.00"}
            </p>
            <button onClick={() => setCount(count + 0.25)} disabled = {count >= 15}>
                +
            </button>
        </div>
    );
};



export default Counter;