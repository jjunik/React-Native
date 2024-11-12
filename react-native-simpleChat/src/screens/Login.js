import React, {useRef, useState} from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback,Keyboard } from "react-native"; 
// TouchableWithoutFeedback 컴포넌트를 클릭했을 때 클릭에 대한 상호작용은 하지만 스타일 작용은 없고, 반드시 하나의 자식컴포넌트를 가져야 한다
// ex) 배경을 터치해 키보드를 닫는 동작 처럼 시각적인 피드백이 필요하지 않을 때
// keyboard API : 키;보드 관련 API로 키보드의 상태를 제어학 ㅗ키보드의 이벤트에 반응하는데 사용 주로 키보드가 화면에 나타나거나 사라질대 ui를 조정하거나 키보드를 수동으로 닫는 등 다양한 작업 수행
// keyboard.dismiss() : 현재 활성화된 키보드를 닫는 함수
import {Image, Input} from "../components";
import { images } from "../utils/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    backgrount-color : ${({theme}) => theme.background};
    padding: 20px;
`

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const passwordRef = useRef();

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex : 1}}
            extraScrollHeight={20}>
        <Container>
            <Image url={images.logo} imageStyle={{borderRadius : 8}}/>
            <Input 
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                onSubmitEditing={() => passwordRef.current.focus()}
                placeholder="Email"
                returnKeyType="next"
            />
            <Input 
                ref={passwordRef}
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                onSubmitEditing={() => {}}
                placeholder="Password"
                returnKeyType="done"
            />
        </Container>
        </KeyboardAwareScrollView>
    )
}
export default Login;