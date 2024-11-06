import React,{useState} from "react";
import styled from "styled-components"

const AppContainer = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
    background-color : #f5f5f5;
`;

//입력 공간
const InputField = styled.TextInput`
    width: 80%;
    padding : 10px;
    margin : 10px;
    background-color : #ffffff;
    border-radius : 5px;
    text-align : center;
`
// 결과 창
const ResultText = styled.Text`
    font-size : 24px;
    margin: 20px;
`

const ButtonContainer = styled.View`
    flex-direction : row;
    justify-content : space-around;
    width: 80%;
    margin-top: 20px;
`

const ClacButton = styled.Pressable`
    padding:16px;
    background-color: #3498db;
    border-radius : 8px;
`
const ButtonText = styled.Text`
    color : white;
    font-size : 18px;
`

const Calculator = () => {
    // 숫자를 저장할 state
    const[num1, setNum1] = useState('');
    const[num2, setNum2] = useState('');

    //결과를 표시할 때 필요한 state
    const [result , setResult] = useState(null);

    //계산 기능
    const handleCalculation = (operator) => {
        if(num1 !== isNaN && num2 !== isNaN){
        switch(operator){
            case '+':
                setResult(parseInt(num1) + parseInt(num2));
                return;
            case '-':
                setResult(num1 - num2);
                return;
            case '*':
                setResult(num1 * num2);
                return;
            case '/':
                setResult(num1 / num2)
                return;
        }
    }else{
        return "숫자만 입력하세요";
    }
}

    return(
        <AppContainer>
            <InputField
                placeholder = "Enter first number"
                keyboardType = "numeric"
                value={num1}
                onChangeText={(text) => setNum1(text)}
                />
             <InputField
                placeholder = "Enter second number"
                keyboardType = "numeric"
                value={num2}
                onChangeText={(text) => setNum2(text)}
                />
            <ResultText>
            {result !== null ? `Result : ${result}` : '숫자를 입력하고 연산자를 누르세요'}
            </ResultText>
            <ButtonContainer>
                {['+','-','*','/'].map((op) =>(
                    <ClacButton key={op} onPress={() => handleCalculation(op)}>
                    <ButtonText>{op}</ButtonText>
                    </ClacButton>
                ))}
            </ButtonContainer>
        </AppContainer>
    )
}

export default Calculator;