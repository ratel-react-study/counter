import { useState } from "react";

export interface CounterProps {
  defaultValue: number;
  min: number;
  max: number;
  step: number;
  precision: number;
  disabled: boolean;
}

const useCounterHook = (props: CounterProps) => {
    const { defaultValue, min, max, step } = props;

  const [count, setCount] = useState<number>(defaultValue);

  const convertFixed = (value: number, precision: number) => {
    return value.toFixed(precision);
  };

  const handleClickIncrease = () => {
    if (count >= max) {
      alert("최대값 초과 불가능");
      return;
    }
    setCount(count + step);
  };

  const handleClickDecrease = () => {
    if (count <= min) {
      alert("최소값 이하 불가능");
      return;
    }
    setCount(count - step);
  };

  return {
    count,
    convertFixed,
    handleClickIncrease,
    handleClickDecrease,
  };
};

export default useCounterHook;