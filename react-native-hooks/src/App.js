import React, { useState } from "react";
import styled from "styled-components";
import Button from "./component/Button";
import Counter from "./component/Counter";
import Form from "./component/Form"
import Timer from "./component/Timer";
import Dog from "./hooks/Dog";
import MakeBread from "./component/MakeBread"
import ScrollComponent from "./component/ScrollComponent";

const Container = styled.View`
    flex:1;
    background-color : # fff;
    justify-content : center;
    align-items : center;
`

const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    return(
        <Container>
           {/* {isVisible && <Form/>}
              버튼을 누르면 Form 컴포넌트를 보였다가 숨겼다가 만들기 
            버튼의 타이틀은 hide 또는 show로 바꾸기
            <Button title={isVisible ? 'hide' : 'show'}
                    onPress={() => setIsVisible(isVisible => !isVisible)}/>
        <Timer/> */}
        <ScrollComponent/>
        </Container>
    )
}
export default App;