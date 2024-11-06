import React , {useState} from "react";
import {View, Text, Button,ScrollView} from "react-native";
import {box_styles} from '../Styles';

const AlignItemsTest = () => {
    const [alignItems, setalignItems] = useState('row');

    return(
        <View style={box_styles.container}>
            <Text style={box_styles.title}>alignItems : {alignItems}</Text>
            {/* 아래의 View에 감싸진 요소들을 flexDirection 으로 방향을 설정 */}
            <View style={[box_styles.boxContainer,{alignItems:alignItems}]}>
                <View style={box_styles.box}><Text>1</Text></View>
                <View style={box_styles.box}><Text>2</Text></View>
                <View style={box_styles.box}><Text>3</Text></View>
            </View>
            <View style={box_styles.buttons}>
                <Button title="Flex Start" onPress={() => setalignItems('flex-start')}/>
                <Button title="Center" onPress={() => setalignItems('center')}/>
                <Button title="Flex End" onPress={() => setalignItems('flex-end')}/>
                <Button title="Stretch" onPress={() => setalignItems('stretch')}/>
            </View>
        </View>
    )
}
export default AlignItemsTest;