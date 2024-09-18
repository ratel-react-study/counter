import { Box, ButtonGroup, Input } from "@chakra-ui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import * as Styles from "@components/counter/Counter.styles";
import useCounterHook, { CounterProps } from "@hooks/useCounterHook";

const Counter = ({
  defaultValue = -4,
  min = -15,
  max = 15,
  step = 0.25,
  precision = 2,
  disabled = false,
}: CounterProps) => {
const { count, convertFixed, handleClickIncrease, handleClickDecrease } =
  useCounterHook({
    defaultValue,
    min,
    max,
    step,
    precision,
    disabled,
  });

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