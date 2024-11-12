import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { theme } from "../Theme";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({theme}) => theme.background};
`

const Signup = () => {
    return(
        <Container>
            <Text style={{fontSize: 30}}>Signup Screen</Text>
        </Container>
    )
}
export default Signup;