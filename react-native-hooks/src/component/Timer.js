import React,{useRef, useEffect, useState} from "react";
import { View, Text} from "react-native";
import Button from "./Button";

const Timer = () => {
    const [count, setCount] = useState(0);
    const timer = useRef(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            timer.current += 1;
            console.log("timer : ", timer.current);
        },1000);

        return () => clearInterval(interval);
    },[]);
    let num = 10;
    return (
    <View>
        <Text>
            const : {count}
        </Text>
        <Text>
            localNum : {num}
        </Text>
        <Button
            title={"+"}
            onPress={() => setCount(prev => prev +1)}/>
    </View>
)
}
export default Timer;