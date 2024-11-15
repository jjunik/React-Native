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
    background-color : ${({theme,editable}) =>
         editable ? theme.background : theme.inputDisabledBackground};
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
            maxLength,
            disabled,
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
                    autoCapitalize="none" // 첫 글자 대문자로 안나오게
                    autoCorrect={false} // 단어 추천기능 안뜨게
                    textContentType="none" // ios에서만 사용하는 옵션, 옵션따라 뜨는 키보드가 달라짐
                    underLineColorAndroid="transparent" // 컴포넌트의 밑줄 색상을 설정할 때 사용
                    editable={!disabled} // 해당 컴포넌트를 수정할수 있냐 없냐
                />
            </Container>
        );
    }
    )
    Input.defaultProps={
        onBlur: () => {},
        onChangeText: () => {},
        onSubmitEditing: () => {},
    }

    Input.propTypes = {
        label : PropTypes.string.isRequired,
        value : PropTypes.string.isRequired,
        onChangeText : PropTypes.func,
        onSubmitEditing : PropTypes.func,
        onBlur : PropTypes.func,
        placeholder : PropTypes.string,
        isPassword : PropTypes.bool,
        returnKeyType :  PropTypes.oneOf(['done', 'next']),
        maxLength : PropTypes.number,
        editable : PropTypes.bool
    }
export default Input;