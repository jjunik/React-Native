import React,{useState,useContext} from "react";
import styled from "styled-components";
import UserContext, { UserConsumer } from "../context/User";

const StyledInput = styled.TextInput`
    border: 1px solid #606060;
    width : 250px;
    padiing : 10px 15px;
    margin : 10px;
    font-size : 24px;
`

const Input = () => {
    const[name, setName] = useState('');

    //UserContext로 부터  dispatch를 받아온다
    const {dispatch} = useContext(UserContext);

    return(

          <StyledInput
              value={name}
              onChangeText={text => setName(text)}
             onSubmitEditing={()=>{
                  dispatch(name);
                   setName('');
              }}
              placeholder="Enter a name..."
             autoCapitalize="none"
             autoCorrect={false}
             returnKeyType="done"
             />
       )
}
export default Input;