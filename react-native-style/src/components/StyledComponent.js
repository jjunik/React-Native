import React,{useState} from 'react';
import styled from 'styled-components';
 
// 사용법 
// const 변수명 = styled.컴포넌트명`CSS` -> 변수명을 컴포넌트로 쓸수 있다
// 새로운 컴포넌트를 생성한 것 이라고 보면 된다.

const Container = styled.View`
    flex: 1;
    justify-content: ceter;
    align-items: center;
    background-color: #fff;
    `
const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`
const StyledButton = styled.Pressable`
    padding: 10px 20px;
    backgrount-color: #007AFF;
    border-radius: 8px;
    margin-top: 10px;
`
const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
`
const Styled = () => {
    const [count, setCount] = useState(0);
    return(
        <Container>
            <Title>Styled components Example</Title>
            <StyledButton onPress={() => setCount(count + 1)}>
                <ButtonText>Click count: {count}</ButtonText>
            </StyledButton>
        </Container>
    );
}
export default Styled;