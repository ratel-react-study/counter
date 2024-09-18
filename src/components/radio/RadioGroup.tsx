import { Flex } from '@chakra-ui/react';
import { createContext, InputHTMLAttributes, useContext } from 'react';

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  direction?: "column" | "row";
}

export const RadioContext = createContext<InputHTMLAttributes<HTMLInputElement>>({});

export const useRadioContext = () => {
    return useContext(RadioContext);
}

const RadioGroup = ({
  children,
  direction = "row",
  ...rest
}: RadioGroupProps) => {
  return (
    <Flex direction={direction} gap={'16px'}>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </Flex>
  );
};

export default RadioGroup;