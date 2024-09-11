import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);


  return (
    <>
      <div>카운트 컴포넌트</div>
      <div>
        <span onClick={() => setCount(count - 1)}>-</span>
        <input type="text" name="count" value={count} />
        <span onClick={() => setCount(count + 1)}>+</span>
      </div>
    </>
  );
}

export default App;


