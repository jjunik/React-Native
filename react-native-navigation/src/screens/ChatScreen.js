import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color : #ffffff;
`
const StyledText = styled.Text`
    font-size:30px;
`

export const Friend = () => {
    return(
    <Container>
        <StyledText>친구 목록</StyledText>
    </Container>
    )
}

export const Chat = (navigation) => {
    return( 
    <NavigationContainer>
    <Container>
        <Button title="채팅방1"
            onPress={() => navigation.navigator('ChatRoom')}    
         />
    </Container>
    </NavigationContainer>
    )
}

export const Settings = () => {
    return(
    <Container>
        <StyledText>설정 화면</StyledText>
    </Container>
    )
}