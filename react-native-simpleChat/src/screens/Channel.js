import React,{useState,useLayoutEffect,useEffect, useContext} from "react";
import { FlatList,Text,Alert } from "react-native";
import styled,{ThemeContext} from "styled-components";
import { createMessage, db, getCurrentUser } from "../utils/firebase";
import {Input} from "../components";
import { GiftedChat, Send } from "react-native-gifted-chat";
import {MaterialIcons} from '@expo/vector-icons';
import {
    collection,
    onSnapshot,
    query,
    doc,
    orderBy,
} from 'firebase/firestore';

const Container = styled.View`
    flex: 1;
    background-color : ${({theme}) => theme.background};
`

const SendButton = props => {
    const theme = useContext(ThemeContext);
    return(
        <Send
            {...props}
            disabled={!props.text}
            containerStyle={{
                width:44,
                height:44,
                alignItems:"center",
                justifyContent:"center",
                marginHorizontal:4,
            }}
        >
            <MaterialIcons
                name="send"
                size={24}
                color={props.text ? theme.SendButtonActive : theme.sendButtonInactive}
            />
        </Send>
    )
}

const Channel = ({navigation,route}) => {
    const [message, setMessage] = useState([]);
    const [text, setText] = useState([]);

    useEffect(() => {
        const docRef = doc(db, 'channels', route.params.id);
        const collectionQuery = query(collection(db,`${docRef.path}/message`),
        orderBy('createAt', "desc")
    );
    const unsubscribe = onSnapshot(collectionQuery, snapshot => {
        snapshot.forEach(doc => {
            list.push(doc.data());
        })
        setMessage(list);
    })
    return() => unsubscribe();
    },[])

    // 헤더를 각각의 채팅방의 title로 지정
    useLayoutEffect(() => {
        navigation.setOptions({headerTitle: route.params.title || 'Channel'})
    },[])
    return(
        <Container>
            <FlatList
                keyExtractor={item => item['id']}
                data={message}
                renderItem={({item})=> (<Text style={{fontSize:24}}>{item.text}</Text>)}
            />
            <Input 
                value={text}
                onChangeText={text => setText(text)}
                onSubmitEditing={() => createMessage({channelId: route.params.id, text})}
            />
        </Container>
    )
}
export default Channel;