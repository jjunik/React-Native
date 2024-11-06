import React ,{useState}from 'react';
import {Text, View , ScrollView, Switch} from 'react-native';
import { viewStyles, textStyles } from './Styles';
import { Header, Contents, Footer } from './components/Layout';
import FlexDirectionTest from './components/FlexDirectionTest';
import JustifycontentTest from './components/JustifyContentTest';
import AlignItemsTest from './components/AlignItemsTest';
import ShadowBox from './components/ShadowBox';
import Styled from './components/StyledComponent';
import Button from './components/ButtonComponent';
import styled from 'styled-components';
import SignUp from './SignUp';
import Input from './components/Input';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme, darkTheme } from './Theme';


const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`

export default function App() {
  const[isDark, setIsDark] = useState(false);

  const _toggleSwitch = () => 
    setIsDark(isDark => !isDark);
  
  return (
    // ThemeProvider에 정의한 props는 하위 컴포넌트에서 받아서 사용할 수 있다.
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <Container>
      <Switch value={isDark} onValueChange={_toggleSwitch}/>
      <Button title="Hanbit"/>
      <Button title="React Native"/>
      <Input borderColor="#3498db" />
      <Input borderColor="#9b59b6" />
    </Container>
    </ThemeProvider>

    // <ScrollView>
    // <View
    //   // 인라인 클래스 ㅅ ㅡ타일 혼용사용 가능
    //   // 뒤에 오는 스타일이 앞의 스타일을 덮어쓴다
    //     style={viewStyles.container}
    //   >
    //     {/* <Header/> 
    //     <Contents/>
    //     <Footer/>
    //     <FlexDirectionTest/>
    //     <JustifycontentTest/>
    //     <AlignItemsTest/>
    //     <ShadowBox/> */}
    //     <Styled/>
    // </View>
    // </ScrollView>
  );
};