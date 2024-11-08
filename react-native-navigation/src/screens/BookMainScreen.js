import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const Container = styled.View`
    background-color : #ffffff;
    align-items: center;
`
const StyledText = styled.Text`
    font-size : 30px;
`


const BookMain = ({navigation}) =>{
    const _onPress = () =>{
        navigation.navigate('List');
    }
    return(
        <Container>
            <StyledText>BookMain</StyledText>
            <Button
                title="go to the List Screen"
                onPress={_onPress}
                />
        </Container>
    )
}
export default BookMain;