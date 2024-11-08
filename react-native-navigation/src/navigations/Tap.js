import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Meet, Settings } from "../screens/TapScreens";
import {MaterialCommunityIcons} from '@expo/vector-icons';

// 이름 크기 색깔만 주면 아이콘 컴포넌트를 만들어주는 함수
const TabIcon = ({name,size,color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color}/>
}

// Tap 네비게이션 생성
const Tap = createBottomTabNavigator();

const TapNavigator = () =>{
    return(
        <Tap.Navigator initialRouteName="Setting"
            screenOptions={({route}) => ({
                tabBarIcon : props => {
                    let name = '';
                    if(route.name === 'Mail') name = 'email';
                    else if(route.name === 'Meet') name= 'video';
                    else name = 'cog';
                    return TabIcon({...props, name})
                },
            tabBarLabelPosition: 'beside-icon',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#54b7f9',
                borderTopColor: '#ffffff',
                borderTopWidth:2
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#0b92e9'
            })}
            >
            <Tap.Screen name ="Mail" component={Mail} options={{
                tabBarLabel:'Index',
                tabBarIcon : props =>
                    TabIcon({
                        ...props, name: props.focused ? 'email' : 'email-outline'
                    })
            }}/>
            <Tap.Screen name ="Meet" component={Meet} options={{
                tabBarLabel:'Index',
                tabBarIcon : props =>
                    TabIcon({
                        ...props, name: props.focused ? 'video' : 'video-outline'
                    })
                }}/>

            <Tap.Screen name ="Settings" component={Settings} options={{
                tabBarLabel:'Index',
                tabBarIcon : props =>
                    TabIcon({
                        ...props, name: props.focused ? 'cog' : 'cog-outline'
                    })
                }}/>
        </Tap.Navigator>
    )

}
export default TapNavigator; 