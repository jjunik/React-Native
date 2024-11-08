import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color : #54b7f9;
`
const StyledText = styled.Text`
    font-size:30px;
`

export const HomeScreen = () => {
    return(
        <Container>
            <StyledText>Welcom to ShopApp</StyledText>
        </Container>
    )
}

export const CartScreen = () => {
    return(
        <Container>
            <StyledText>Your Cart is Empty</StyledText>
            <Button title="AddItem" onPress={() => alert('장바구니에 추가되었습니다.')}/>
        </Container>
    )
}

export const ProfileScreen = () => {
    return(
        <Container>
            <StyledText>Your Profile</StyledText>
        </Container>
    )
}