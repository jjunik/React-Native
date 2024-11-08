import React,{useContext} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import UserContext from "../context/UserContext";
import LoginProvider from "../context/UserContext";

const HomeComponent = () => {
    const {user} = useContext(UserContext);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {user.isLogin ? 'Welcome, 홍길동님' : '로그인 하세요'}
            </Text>
            <Button title={user.isLogin ? '로그아웃' : '로그인'} onPress={toggleLogin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',       
        alignItems:'center'
    },
    text:{
        color :'#333'
    }
})
export default HomeComponent;