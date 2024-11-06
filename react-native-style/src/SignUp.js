import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const SignUp = () => {

    return(
        <View>
            <Text >이름</Text>
            <TextInput placeholder="이름을 입력하세요"/>
            <Text >이메일</Text>
            <TextInput placeholder="이메일을 입력하세요"/>
            <Text >비밀번호</Text>
            <TextInput placeholder="비밀번호를 입력하세요"/>
            <Text >비밀번호 확인</Text>
            <TextInput placeholder="비밀번호를 입력하세요"/>
            <Button onPress={()=> '가입완료'}>가입하기</Button>
        </View>
    )
}




export default SignUp;