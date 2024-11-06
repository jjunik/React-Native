import React ,{useState} from "react";
import { View, Text } from "react-native";
import MyButton from "./MyComponents";

const Counter = () => {
    const [num, setNum] = useState(0);

return(
    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:30, marginBottom:10}}>{num}</Text>
    <MyButton title='+1' onPress={() => {setNum(num + 1)}}/>
    <MyButton title='-1' onPress={() => {setNum(num - 1)}}/>
    </View>
)

}
export default Counter