import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import BookStackNavigation from './navigations/BookStack';
import UserStackNaviation from './navigations/UserStack';
import TapNavigator from './navigations/Tap';
import ShopTapNavigator from './navigations/ShoppingTap';
import ChatTapNavigator from './navigations/ChatTap';
import ChatStackNavigation from './navigations/ChatStack';
import DrawerNavigation from './navigations/Drawer';

// import styled from 'styled-components';

// const Container = styled.View`
//     flex : 1;
//     background-color : #ffffff;
//     justify-content : center;
//     align-items : center;
// `

const App = () => {
    return(
        <NavigationContainer>
            <DrawerNavigation/>
        </NavigationContainer>
    )
}

export default App;