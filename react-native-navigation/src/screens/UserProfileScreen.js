import React from "react"
import styled from "styled-components"

const Container = styled.View`
    flex:1; 
    align-items : center;
    background-color : #ffffff;
`
const StyledText = styled.Text`
    font-size: 30px;
    margon-bottom : 10px;
`

const UserProfile = ({route}) => {
    return(
        <Container>
            <StyledText>name: {route.params.name}</StyledText>
            <StyledText>email: {route.params.email}</StyledText>
        </Container>
    )
}
export default UserProfile;