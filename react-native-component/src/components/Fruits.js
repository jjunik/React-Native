import React,{useState} from "react";
import { View, Text } from "react-native";

export default ItemList = (props) =>{

    return(
        <View>
                {props.item.map((item,index)=>(
                    <text key={index}>{item}</text>
                ))}               
        </View>
    )
}