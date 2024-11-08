import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatRoom from "../screens/ChatStackScreen";

const Stack = createStackNavigator();

const ChatStackNavigation = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name="ChatRoom" component={ChatRoom}></Stack.Screen>
        </Stack.Navigator> 
    )
}
export default ChatStackNavigation;