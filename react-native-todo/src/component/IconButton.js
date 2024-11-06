import React from "react";
import {Pressable} from 'react-native'
import styled from "styled-components";
import PropTypes from "prop-types";
import { images } from "../images";

const Icon = styled.Image`
    tint-color : ${({theme, completed}) => (completed ? theme.done : theme.text)};
    width:30px;
    height:30px;
    margin:10px;    
`


const IconButton = ({type, onPressOut, id, completed}) => {
    const _onPressOut =()=>{
        onPressOut(id);
    }
    
    return(
        <Pressable onPressOut={_onPressOut}>
            <Icon completed={completed} source={type}/>
        </Pressable>
    )
}

IconButton.defaultProps={
    onPressOut: () => {}
}

IconButton.propTypes = {
    type:PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut:PropTypes.func,
    id:PropTypes.string
}
export default IconButton;