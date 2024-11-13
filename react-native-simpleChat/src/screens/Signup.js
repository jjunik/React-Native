import React,{useState,useEffect,useRef} from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { theme } from "../Theme";
import { Button,Image,Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/Common";
import { images } from "../utils/Images";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({theme}) => theme.background};
    padding: 0 20px;
`
const ErrorText = styled.Text`
    align-items : felx-start;
    width: 100%;
    height: 20px;
    margin-bottom : 10px;
    line-height : 20px;
    color : ${({theme}) => theme.errorText};
`

const Signup = () => {
    const[photoUrl, setPhotoUrl] = useState(images.person);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [disabled,setDisabled] = useState(true)

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const didMountRef = useRef();


    useEffect(() => {
        if (didMountRef.current) {
            
        
            let _errorMessage = '';
            if (!name) {
                _errorMessage="Please enter your name";
            }else if (!validateEmail(email)) {
                _errorMessage="Please verify your email";
            }else if (password.length<6) {
                _errorMessage="The Password must contain 6 characters at least";
            }else if (password !== passwordConfirm) {
                _errorMessage="Passwords need to match";
            }else{
                _errorMessage="";
            }
            setErrorMessage(_errorMessage)
        }else{
            didMountRef.current = true;
        }
    },[name,email,password,passwordConfirm])

    useEffect(() => {
        setDisabled(
            !(name&&email&&password&&passwordConfirm&&!errorMessage)
        )
    },[]) 
    const _handleSignupButtonPress = () =>{

    };

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraHeight={20}
        >
        <Container>
            <Image
                rounded 
                url={photoUrl} 
                showButton
                onChangeImage={url => setPhotoUrl(url)}
            />
            <Input 
                lable="Name"
                value={name}
                onChangeText={text => setName(text)} // 텍스트가 변할 때마다 state에 반영
                onSubmitEditing={() => {// 완료버튼 누를시 state에 반영, 이메일칸으로 포커스 이동
                    setName(name.trim());
                    emailRef.current.focus();
                }}
                onBlur={() => setName(name.trim())} // 포커스가 빠져도 이름을 state에 반영 
                placeholder="Name"
                returnKeyType="next"
            />
            <Input
                ref={emailRef}
                lable="Email"
                value={email}
                onChangeText={text => setEmail(validateEmail(removeWhitespace(text)))}
                onSubmitEditing={()=> passwordRef.current.focus()}
                placeholder="email"
                returnKeyType="next"
            />
            <Input
                ref={passwordRef}
                lable="Password"
                value={password}
                onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
                onSubmitEditing={() => password.current.focus}
                placeholder="Password"
                returnKeyType="done"
                isPassword={true}
            />
            <Input
                ref={passwordConfirmRef}
                lable="PasswordConfirm"
                value={passwordConfirm}
                onChangeText={text => setPassword(removeWhitespace(text))}
                onSubmitEditing={_handleSignupButtonPress}
                placeholder="PasswordConfirm"
                returnKeyType="done"
                isPassword={true}
            />
            <ErrorText>{errorMessage}</ErrorText>
            <Button
                title="Signup"
                onPress={_handleSignupButtonPress}
                disabled={disabled}
                />
        </Container>
        </KeyboardAwareScrollView>
    )
}
export default Signup;