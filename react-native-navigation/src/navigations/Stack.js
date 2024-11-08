import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';
//vector-icons
// expo 프로젝트에서 기본으로 제공하는 라이브러리
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Platform } from "react-native";

// creacteStackNavigator() 함수를 호출해 스택 네비게이션을 생성
const Stack = createStackNavigator();

// 생성된 스택 네비게이션에는 화면을 구성하는 screen 컴포넌트와 
// Screen 컴포넌트를 관리하는 Navigator 컴포넌트가 있다.
const StackNavigation = () =>{
    return(
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                cardStyle:{backgroundColor:'#ffffff'},
                headerStyle : {
                    height: 110,
                    backgroundColor: '#95a5a5',
                    borderBottomWidth : 5,
                    borderBottomColor : '#34495e',
                },
                headerTitleStyle : { color:'#ffffff', fontSize: 24},
                headerTitleAlign : 'center',
                headerTitle: ({style}) => (
                    <MaterialCommunityIcons name="react" style={style}/>
                ),
            }}>
                <Stack.Screen name="Home" component={Home} options={{headerMode : 'screen'}}/>
                <Stack.Screen name="List" component={List} options={{
                    headerTitle: 'List Screen',
                    headerBackTitleVisible : true, 
                    headerBackTitle:'prev',
                    headerTitleStyle: {fontSize: 24} ,
                    headerTintColor: '#e74c3c',
                    headerBackImage : ({tintColor}) => {
                        const style = {
                            marginRight : 5,
                            marginLeft : Platform.OS === 'ios' ? 11 : 0,
                        };
                        return(
                            <MaterialCommunityIcons
                                name="keyboard-backspace"
                                size={30}
                                color={tintColor}
                                style={style}
                            />
                        )
                    },
                    headerRight: ({tintColor}) => (
                        <MaterialCommunityIcons
                            name="home-variant"
                            size={30}
                            style={{marginRight: 11}}
                            color={tintColor}
                            onPress={() => NavigationPreloadManager.popToTop()}
                            />
                    )
                     }}/>
                <Stack.Screen name="Detail" component={Item}/>
        </Stack.Navigator>
    )
}
export default StackNavigation;