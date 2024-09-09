import React, { useState } from 'react'; // 훅 사용하기

interface CounterProps {
  step?: number; // 단위 (기본값: 0.25)
  min?: number; // 최소값 (기본값: -15.00)
  max?: number; // 최대값 (기본값: 15.00)
  decimals?: number; // 소수점 자리수 (기본값: 2)
}

const Counter: React.FC<CounterProps> = ({ step = 0.25, min = -15.00, max = 15.00, decimals = 2 }) => {
  const [count, setCount] = useState(0);

  // 카운터 값을 증가시키는 함수
  const increase = () => {
    if(count + step > max) {
        alert(`${max}를 넘게 입력할 수 없습니다.`)
    } else {
        setCount(prev => Math.min(max, +(prev + step).toFixed(decimals)));    
    }
  };

  // 카운터 값을 감소시키는 함수
  const decrease = () => {
    if(count - step < min) {
        alert(`${min}를 넘게 입력할 수 없습니다.`)
    } else {
        setCount(prev => Math.max(min, +(prev - step).toFixed(decimals)));
    }
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <input type="number" value={count.toFixed(decimals)} />
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;