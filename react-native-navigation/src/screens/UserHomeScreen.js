import React from "react";
import { Button, Pressable,Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    align-items : center;
    background-color : #ffffff;
`
const StyledText = styled.Text`
    font-size: 30px;
    margon-bottom : 10px;
`

const UserHome = ({navigation}) => {

    return(
        <Container>
            <StyledText>User Home</StyledText>
            <Pressable
            onPress={() => navigation.navigate('UserList')}
            style={{ 
                paddingHorizontal: 10,
                paddingVertical:5,
                backgroundColor: '#3498db',
                borderRadius: 5,
                alignItems: 'center'
            }}
                >
                <Text>유저 목록 보기</Text>
            </Pressable>
        </Container>
    )
}
export default UserHome;