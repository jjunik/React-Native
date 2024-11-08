import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserHome from "../screens/UserHomeScreen";
import UserList from "../screens/UserListScreen";
import UserProfile from "../screens/UserProfileScreen";

const Stack = createStackNavigator();

const UserStackNaviation = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name="UserHome" component={UserHome}/>
            <Stack.Screen name="UserList" component={UserList}/>
            <Stack.Screen name="UserProfile" component={UserProfile}/>
        </Stack.Navigator>
    )
}
export default UserStackNaviation;