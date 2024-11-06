import React,{useState} from "react";
import { View,Text,Button } from "react-native";

const MakeBread = () => {
    const[coffeeStatus, setCoffeeStatus] = useState('커피대기중...');
    const[breadStatus, setBreadStatus] = useState('빵대기중...');
    const[breakfastStatus, setBreakfastStatus] = useState('아침 식사가 준비되지 않았습니다.');

    const makeCoffe = async () => {
        setCoffeeStatus('커피 만들기 시작!');
        await new Promise(resolve => setTimeout(resolve,2000)); // 2초 기다림
        setCoffeeStatus('커피 완성');
    }   

    const MakeBread = async () => {
        setBreadStatus('빵 굽기 시작!')
        await new Promise(resolve => setTimeout(resolve,3000));
        setBreadStatus('빵 완성')
    }

    const MakeBreakfast = async ()=> {
        setBreakfastStatus('아침 식사를 준비중...')
        await makeCoffe();
        await MakeBread();
        setBreakfastStatus('아침 식사가 준비완료.')
    }
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:24, marginBottom:10}}>{coffeeStatus}</Text>
            <Text style={{fontSize:24, marginBottom:10}}>{breadStatus}</Text>
            <Text style={{fontSize:24, marginBottom:10}}>{breakfastStatus}</Text>
            <Button title="아침 식사 준비하기" onPress={MakeBreakfast}/>
        </View>

    )

}
export default MakeBread;