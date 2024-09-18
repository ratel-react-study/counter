import { useState } from "react";
import { Box, ButtonGroup, Input } from "@chakra-ui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import * as Styles from "./Counter.styles";

type Props = {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  disabled?: boolean;
};

const Counter = ({
  defaultValue = -4,
  min = -15,
  max = 15,
  step = 0.25,
  precision = 2,
  disabled = false,
}: Props) => {
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

  return (
    <Box>
      <ButtonGroup>
        <Styles.Button
          icon={<BiMinus />}
          onClick={(e) => !disabled && handleClickDecrease(e)}
          aria-label={"Minus Button"}
          disabled={disabled}
        />
        <Input
          readOnly
          value={convertFixed(count, precision)}
          disabled={disabled}
        />
        <Styles.Button
          icon={<BiPlus />}
          onClick={(e) => !disabled && handleClickIncrease(e)}
          aria-label={"Plus Button"}
          disabled={disabled}
        />
      </ButtonGroup>
    </Box>
  );
};

export default Counter;

