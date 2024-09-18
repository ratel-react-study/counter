import { Flex } from "@chakra-ui/react";
import { InputHTMLAttributes } from "react";
import { useRadioContext } from "./RadioGroup";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

const Radio = ({ children, name, value, disabled, ...rest }: RadioInputProps) => {
    const group = useRadioContext();

  return (
    <label>
      <Flex align={"center"} gap={"6px"}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={group.value !== undefined ? value === group.value : undefined}
          disabled={disabled || group.disabled}
          onChange={(e) => group.onChange && group.onChange(e)}
          {...rest}
        />
        <span>{children}</span>
      </Flex>
    </label>
  );
};

export default Radio;
