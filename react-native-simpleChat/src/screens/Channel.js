import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    background-color : ${({theme}) => theme.background};
`

const Channel = ({route}) => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>ID: {route.params.id}</Text>
            <Text style={{fontSize: 24}}>Title: {route.params.Title}</Text>
        </Container>
    )
}
export default Channel;