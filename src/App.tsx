import {Container, Heading, HStack } from '@chakra-ui/react';
import Counter from '@components/counter/Counter';
import Radio from '@components/radio/Radio';
import { useState } from 'react';
import RadioGroup from '@components/radio/RadioGroup';

function App() {
  const [checked, setChecked] = useState<string>('');

  const handleClickRadioInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setChecked(value);
  }

  return (
    <Container>
      <Heading>카운터 컴포넌트</Heading>

      <HStack spacing={"16px"}>
        <RadioGroup value={checked} onChange={handleClickRadioInput}>
          <Radio value={"R"}>R</Radio>
          <Radio value={"L"}>L</Radio>
        </RadioGroup>
      </HStack>

      <HStack spacing={"16px"}>
        <Counter disabled={checked === 'L'} />
        <Counter disabled={checked === 'R'} />
      </HStack>
    </Container>
  );
}

export default App;


