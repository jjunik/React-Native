import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { View,Text, StyleSheet,TouchableOpacity } from "react-native"


const Drawer = createDrawerNavigator();

// props로 전달되는 내용
// navigation,
// state : // 드로어의 현재 상태에 대한 정보가 담ㄷ긴 객체 어떤 스크린이 포함되어있는지
// 현재활성화된 스크린을 확인하거나 특정 스크린의 상태에 따라 UI를 변경할 때 사용한다

// description, : 각 스크린에 대한 설정 정보들이 담겨있는 객체, 각 항목에 대한 옵션, 아이콘, 라벨등을 포함

// 드로어 항목들


const CustomDrawerContent = (props) => {
    return(
        // DrawerContentScrollView: drawer 내용을 스크롤 할 수 있는 컴포넌트로,
        // 기본 drawer항목을 감싸고 추가 콘텐츠를 넣을 수 있다.
        <DrawerContentScrollView {...props} contentContainerStyle={StyleSheet.drawerContent}>
            {/* 커스텀드로어의 헤더 영역 */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Custom Drawer</Text>
            </View>
            {/* 기본 드로어 메뉴 항목표시 : 드로어에 설정된 스크린 목록을 보여줌 */}
            <DrawerItemList {...props} />
            {/* <DrawerItemList
                state={props.state} 
                descriptors={props.descriptors}
                navigation={props.navigation}
                */}

            <TouchableOpacity
                style={styles.customButton}
                onPress={()=> alert("Custom Button Pressed")}
            >
                <MaterialCommunityIcons name="star" size={24} color={"white"}/>
                <Text style={styles.customButtonText}>Custom Button</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}



const DrawerNavigation = () => {
    return(
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={({navigation})=>({
                drawerStyle:{backgroundColor: '#e6e6e6', // 배경색
                width:170, // drawer 너비
                borderWidth:5, // 테두리 두께
                borderColor: '#ccc', //테두리 색

                },
                drawerLabelStyle:{fontSize: 12,}, 
                drawerActiveTintColor:'#4CAF50', // 선택된 메뉴 색삭
                drawerInactiveTintColor: '#757575', // 선택안된 메뉴 색상
                drawerPosition: "right",
                headerTitle: "drawer test",
                headerTitleStyle:{
                    fontSize:24,
                    fontWeight: 'bold',
                    color:'#fff',
                },
                headerTitleAlign: 'center',
                headerStyle:{
                    backgroundColor:'#4CAF50'
                },
                headerLeft: () => null,
                headerRight: ()=>(
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={{marginRight: 15}}
                    >
                        <MaterialCommunityIcons name="menu" size={28} color="black"/>
                    </TouchableOpacity>
                ),
                drawerType:'slide', // 서랍이 열리면서 뒤 화면도 밀림
            })}>
            <Drawer.Screen name="Home" component={HomeScreen}
                options={{
                    drawerIcon:({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    )
                }}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen}
                options={{
                    drawerIcon:({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    header:{
        padding:20,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
    },
    headerText:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    customButton:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        margin: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
    },
    customButtonText:{
        color: 'white',
        marginleft:10,
        fontSize: 16,
    }
})
export default DrawerNavigation;