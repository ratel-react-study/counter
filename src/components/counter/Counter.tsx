import * as Styles from "./Counter.style";

type Props = {
    min: number;
    max: number;
    step: number;
    
}

const Counter = ({min, max, step}: Props) => {
    return (
        <Styles.Container>
            <Styles.Button>-</Styles.Button>
            <Styles.Input />
            <Styles.Button>+</Styles.Button>
        </Styles.Container>
    );
};

export default Counter;