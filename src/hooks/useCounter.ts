// src/hooks/useCounter.ts
import { useState } from 'react';

// 카운터에 관련된 훅을 정의
export const useCounter = (step: number, min: number, max: number, decimals: number) => {
  const [count, setCount] = useState(0); // 카운터 상태 초기값 설정

  // 카운터 값을 증가시키는 함수
  const increase = () => {
    if(count + step > max) {
      alert(`${max}를 넘게 입력할 수 없습니다.`); // 최대값을 넘으면 경고
    } else {
      setCount(prev => Math.min(max, +(prev + step).toFixed(decimals))); // 소수점 자리수까지 반영하여 값 설정
    }
  };

  // 카운터 값을 감소시키는 함수
  const decrease = () => {
    if(count - step < min) {
      alert(`${min}를 넘게 입력할 수 없습니다.`); // 최소값을 넘으면 경고
    } else {
      setCount(prev => Math.max(min, +(prev - step).toFixed(decimals))); // 소수점 자리수까지 반영하여 값 설정
    }
  };

  return { count, increase, decrease }; // 카운트 상태와 함수 반환
};