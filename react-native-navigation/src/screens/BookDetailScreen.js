import React, {useLayoutEffect} from "react";
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    background-color : #ffffff;
    align-items: center;
`;
const StyledText = styled.Text`
    font-size : 30px;
`;

const Detail = ({route}) => {

    return(
        <Container>
            <StyledText>Book</StyledText>
            <StyledText>ID: {route.params.id}</StyledText>
            <StyledText>title: {route.params.title}</StyledText>
            <StyledText>description: {route.params.description}</StyledText>
        </Container>

    )
}
export default Detail;