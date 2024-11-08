import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { CartScreen, HomeScreen, ProfileScreen } from "../screens/ShoppingTapScreens";


const TabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color}/>
}

const Tap = createBottomTabNavigator();

const ShopTapNavigator = () => {
    return(
            
        <Tap.Navigator
            screenOptions={({route}) => ({
                tabBarIcon : props => {
                    let name = '';
                    let size = 24;
                    if(route.name === 'HomeScreen') name = 'home';
                    else if(route.name === 'CartScreen') name = 'cart';
                    else name = 'account';
                    return TabIcon({...props, name, size})
                }
            })}
            >
            <Tap.Screen name="HomeScreen" component={HomeScreen}/>
            <Tap.Screen name="CartScreen" component={CartScreen} />
            <Tap.Screen name="ProfileScreen" component={ProfileScreen}/>
        </Tap.Navigator>
    )
}
export default ShopTapNavigator;