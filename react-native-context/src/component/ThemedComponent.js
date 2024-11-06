import React,{useContext, useState} from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import ThemeContext, {ThemeProvider} from "../context/ThemeContext"


const ThemedComponent = () => {

    const {isDarkMode, toggleTheme} = useContext(ThemeContext);

    return(
        <View
        style={isDarkMode ? styles.darkContainer : styles.lightContainer}> 
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </Text>
            <Button title = 'Toggle Theme' onPress={toggleTheme}/>
        </View>
    )
}

const styles = StyleSheet.create({
    darkContainer:{
        width:'100%',
        flex:1,
        backgroundColor: '#333',
        justifyContent:'center',       
        alignItems:'center'
    },
    lightContainer:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',       
        alignItems:'center'
    },
    darkText : { color:'#fff'},
    lightText: {color : '#333'}
})

export default ThemedComponent;