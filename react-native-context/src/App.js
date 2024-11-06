import React from "react";
import styled from "styled-components";
import User from "./component/User";
import UserContext,{UserProvider} from "./context/User";
import Input from "./component/Input";
import ThemeProvider from "./context/ThemeContext";
import ThemedComponent from "./component/ThemedComponent";
import { CartProvider } from "./context/CatContext";
import CartScreen from "./component/CartScreen";
import HomeComponent from "./component/HomeScreen";

const Container = styled.View`
    flex : 1;
    background-color : #ffffff;
    justify-content : center;
    align-items : center;
`

const App = () => {
    return(
        <UserProvider>
        <Container>
            <HomeComponent/>
        </Container>
        </UserProvider>
    )
}
export default App;