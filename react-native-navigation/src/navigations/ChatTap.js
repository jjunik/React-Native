import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Chat, Friend, Settings } from "../screens/ChatScreen";

const TabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color}/>
}

const Tap = createBottomTabNavigator();

const ChatTapNavigator = () => {
    return(
        <Tap.Navigator
            screenOptions={({route}) => ({
                tabBarIcon : props => {
                    let name = '';
                    let size = 24;
                    if(route.name === 'Friend') name = 'account';
                    else if(route.name === 'Chat') name = 'wechat';
                    else name = 'cog';
                    return TabIcon({...props, name, size})
                }
            })}
            >
            <Tap.Screen name="Friend" component={Friend}/>
            <Tap.Screen name="Chat" component={Chat} />
            <Tap.Screen name="Settings" component={Settings}/>
        </Tap.Navigator>
    )
}
export default ChatTapNavigator;