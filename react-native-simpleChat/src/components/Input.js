import React,{forwardRef, useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../Theme";

// 모든 요소를 감싸는 컴포넌트
const Container = styled.View`
    flex-direction : column;
    width: 100%;
    margin: 10px 0;
`
// TextInput 안에 쓰이는 글씨
const Label = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    color : ${({theme, isFocused}) => (isFocused ? theme.text : theme.label)};
`
// TextInput 컴포넌트
const StyledTextInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor : theme.inputPlaceholder,    
}))`
    background-color : ${({theme}) => theme.background};
    color : ${({theme}) => theme.text};
    padding : 20px 10px;
    font-size : 16px;
    border : 1px solid ${({theme, isFocused}) => (isFocused ? theme.text : theme.inputBorder)};
    border-radius : 4px;
    `
    // forwardRef()
    // React 에서 특정 컴포넌트가 받은 ref를 자식 컴포넌트의 특정 DOM 요소나 
    // React Native 컴포넌트로 전달할 수 있도록 하는 기능. forwardRef((props,ref)=>{});
    const Input = forwardRef(
    (
        {
            label,
            value,
            onChangeText,
            onSubmitEditing,
            onBlur,
            placeholder,
            isPassword,
            returnKeyType,
            maxLength
        },
            ref

    ) => {
        const [isFocused, setIsFocused] = useState(false);
        return(
            <Container>
                <Label isFocused={isFocused}>{label}</Label>
                <StyledTextInput
                    ref={ref}
                    isFocused={isFocused}
                    value={value}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                        onBlur();
                    }}
                    placeholder={placeholder}
                    secureTextEntry={isPassword}
                    returnKeyType={returnKeyType}
                    maxLength={maxLength}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="none"
                    underLineColorAndroid="transparent"
                />
            </Container>
        );
    }
    )
    Input.defaultProps={
        onBlur: () => {},
    }

    Input.propTypes = {
        label : PropTypes.string.isRequired,
        value : PropTypes.string.isRequired,
        onChangeText : PropTypes.func,
        onBlur : PropTypes.func,
        placeholder : PropTypes.string,
        isPassword : PropTypes.bool,
        returnKeyType :  PropTypes.oneOf(['done', 'next']),
        maxLength : PropTypes.number

    }
export default Input;