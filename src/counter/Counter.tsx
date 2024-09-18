// src/components/Counter.tsx
import React from 'react';
import { useCounter } from '../hooks/useCounter'; // 커스텀 훅을 가져옴

interface CounterProps {
  step?: number; // 단위 (기본값: 0.25)
  min?: number; // 최소값 (기본값: -15.00)
  max?: number; // 최대값 (기본값: 15.00)
  decimals?: number; // 소수점 자리수 (기본값: 2)
}

const Counter: React.FC<CounterProps> = ({ step = 0.25, min = -15.00, max = 15.00, decimals = 2 }) => {
  // 첫 번째 카운터의 상태 및 함수
  const { count: count1, increase: increase1, decrease: decrease1 } = useCounter(step, min, max, decimals);
  // 두 번째 카운터의 상태 및 함수
  const { count: count2, increase: increase2, decrease: decrease2 } = useCounter(step, min, max, decimals);
  // 세 번째 카운터의 상태 및 함수
  const { count: count3, increase: increase3, decrease: decrease3 } = useCounter(step, min, max, decimals);

  return (
    <>
      <div>
        <button onClick={decrease1}>-</button> {/* 첫 번째 카운터 감소 버튼 */}
        <input type="number" value={count1.toFixed(decimals)} readOnly /> {/* 첫 번째 카운터 값 표시 */}
        <button onClick={increase1}>+</button> {/* 첫 번째 카운터 증가 버튼 */}
      </div>
      <div>
        <button onClick={decrease2}>-</button> {/* 두 번째 카운터 감소 버튼 */}
        <input type="number" value={count2.toFixed(decimals)} readOnly /> {/* 두 번째 카운터 값 표시 */}
        <button onClick={increase2}>+</button> {/* 두 번째 카운터 증가 버튼 */}
      </div>
      <div>
        <button onClick={decrease3}>-</button> {/* 두 번째 카운터 감소 버튼 */}
        <input type="number" value={count3.toFixed(decimals)} readOnly /> {/* 두 번째 카운터 값 표시 */}
        <button onClick={increase3}>+</button> {/* 두 번째 카운터 증가 버튼 */}
      </div>
    </>
  );
};

export default Counter;