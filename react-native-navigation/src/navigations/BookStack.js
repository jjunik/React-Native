import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookMain from "../screens/BookMainScreen";
import List from "../screens/BlookListScreen";
import Detail from "../screens/BookDetailScreen";


const Stack = createStackNavigator();

const BookStackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Main"> 
            <Stack.Screen name="Main" component={BookMain}/>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}
export default BookStackNavigation;