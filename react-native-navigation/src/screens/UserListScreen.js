import React from "react";
import {View, Button, Pressable,Text } from "react-native";

import styled from "styled-components";

const Container = styled.View`
    align-items : center;
    background-color : #ffffff;
`
const StyledText = styled.Text`
    font-size: 30px;
    margon-bottom : 10px;
`
const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', email: 'alice@example.com' },
  ];

const UserList = ({navigation}) => {
    const _onPress = (user) =>{
        navigation.navigate("UserProfile", {id:user.id, name:user.name, email:user.email});
    }
    return(
        <Container>
            <StyledText>User List</StyledText>
            
            {users.map(user => (
                <View
                    key={user.id}
                    style={{
                        padding:10,
                        borderBottomWidth:1,
                        borderBottom:10
                    }}
                    >
                    <Text style={{fontSize: 18, marginBottom:5}}>
                        {user.name}
                    </Text>
                    <Pressable
                        onPress={() => _onPress(user)}
                        style={{ 
                            paddingHorizontal: 10,
                            paddingVertical:5,
                            backgroundColor: '#3498db',
                            borderRadius: 5,
                            alignItems: 'center'
                        }}
                        >
                            <Text style={{color:'white'}}>프로필 보기</Text>
                    </Pressable>
                </View>
            ))}     
        </Container>
    )
}
export default UserList;