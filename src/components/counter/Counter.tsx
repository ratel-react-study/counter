import { useState } from "react";
import { Box, ButtonGroup, IconButton, Input } from "@chakra-ui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

type Props = {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
};

const Counter = ({
  defaultValue = -4,
  min = -15,
  max = 15,
  step = 0.25,
  precision = 2,
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
        <IconButton
          icon={<BiMinus />}
          onClick={handleClickDecrease}
          aria-label={"icon-button_minus"}
        />
        <Input readOnly value={convertFixed(count, precision)} />
        <IconButton
          icon={<BiPlus />}
          onClick={handleClickIncrease}
          aria-label={"icon-button_plus"}
        />
      </ButtonGroup>
    </Box>
  );
};

export default Counter;