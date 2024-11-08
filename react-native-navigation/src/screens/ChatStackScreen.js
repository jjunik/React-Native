import React from "react";
import styled from "styled-components";

const Container = styled.View`
    background-color : #ffffff;
    align-items: center;
`;
const StyledText = styled.Text`
    font-size : 30px;
`;

const ChatRoom = () => {

    return(
        <Container>
            <StyledText>안녕하세요 채팅창입니다.</StyledText>
        </Container>
    )
}
export default ChatRoom;