import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledText = styled.Text`
    font-size : 24px;
    margin : 10px;

`

const Counter = () => {

    const [result, setResult] = useState(0);

    // const Plus = () => {
    //     setResult(result + 1);
    //     console.log(result)
    // }

    const Minus = () => {
        setResult(result - 1);
    }

    return(
        <>
     <StyledText>count : {result}</StyledText>
    <Button title={'+'} onPress={() => {
        setResult(result => result +1)
        console.log(result)
        }} />
    
    <Button title={'-'} onPress={Minus}/>
    </>
    )
}
export default Counter;