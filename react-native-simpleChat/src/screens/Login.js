import React, {useRef, useState, useEffect,useContext} from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback,Keyboard } from "react-native"; 
// TouchableWithoutFeedback 컴포넌트를 클릭했을 때 클릭에 대한 상호작용은 하지만 스타일 작용은 없고, 반드시 하나의 자식컴포넌트를 가져야 한다
// ex) 배경을 터치해 키보드를 닫는 동작 처럼 시각적인 피드백이 필요하지 않을 때
// keyboard API : 키;보드 관련 API로 키보드의 상태를 제어학 ㅗ키보드의 이벤트에 반응하는데 사용 주로 키보드가 화면에 나타나거나 사라질대 ui를 조정하거나 키보드를 수동으로 닫는 등 다양한 작업 수행
// keyboard.dismiss() : 현재 활성화된 키보드를 닫는 함수
import {Image, Input, Button} from "../components";
import { images } from "../utils/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {validateEmail , removeWhitespace} from '../utils/Common'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { login } from "../utils/firebase";
import { ProgressContext, ProgressProvider } from "../contexts/Progress";
import { UserContext } from "../contexts";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    backgrount-color : ${({theme}) => theme.background};
    padding:0 20px;
    padding-top:${({inSets:{top}}) => top}px;
    padding-bottom:${({inSets:{bottom}})=> bottom}
`
const ErrorText = styled.Text`
    align-items : felx-start;
    width: 100%;
    height: 20px;
    margin-bottom : 10px;
    line-height : 20px;
    color : ${({theme}) => theme.errorText};
`

const Login = ({navigation}) => {

    const {spinner} = useContext(ProgressContext);
    const {dispatch} = useContext(UserContext);
    // useSafeAreaInsets()
    // 화면의 안전 영역을 고려해 레이아웃을 조정할 때 사용하는 Hook
    // ios 장치의 상단 노치나 하단 홈 버튼 영역과 같은 안전구역을 감안해 레이아웃을 맞추기 위해 사용
    // hook은 {top,bottom,left,right} 형태의 객체를 반환한다.
    // 안전 영역의 높이나 너비를 픽셀 단위로 제공

    const inSets = useSafeAreaInsets();

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        // 이메일을 입력하고, 비밀번호를 입력하고
        // 조건맞게 입력했을 때 false로 바꾼다.
        setDisabled(!(email && password && !errorMessage))
    },[email,password,errorMessage]) 
    // email,password,errorMessage 값이 바뀔때 마다 useEffect 실행

    const _handleEmailChange = email => {
        // Input에 적힌 email을 받아와서 모든 공백 제거
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage( 
            validateEmail(changedEmail) ? '' : 'Please verify your email'
        )
    }
    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password));
    }
    const _handleLoginButtonPress = async () => {
        try {
            spinner.start();
            const user = await login({email, password});
            dispatch(user);
            Alert.alert('Login Success', user.email);
        } catch (error) {
            Alert.alert('Login Error' , error.message )
        } finally{
            spinner.stop(); 
        }
    }
    

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex : 1}}
            extraScrollHeight={20}>
        <Container inSets={inSets}>
            <Image url={images.logo} imageStyle={{borderRadius : 8}}/>
            <Input 
                label="Email"
                value={email}
                onChangeText={_handleEmailChange}
                onSubmitEditing={() => passwordRef.current.focus()}
                placeholder="Email"
                returnKeyType="next"
            />
            <Input 
                isPassword={true}
                ref={passwordRef}
                label="Password"
                value={password}
                onChangeText={_handlePasswordChange}
                onSubmitEditing={_handleLoginButtonPress}
                placeholder="Password"
                returnKeyType="done"
            />
            <ErrorText>{errorMessage}</ErrorText>
            <Button title="Login" onPress={_handleLoginButtonPress} disabled={disabled}/>
            <Button title="Sign up with email" onPress={() => navigation.navigate('Signup')} isFilled={false}/>
        </Container>
        </KeyboardAwareScrollView> 
    )
}
export default Login;