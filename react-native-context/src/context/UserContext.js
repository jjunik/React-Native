import React, {useState, createContext, useReducer} from "react";

const UserContext = createContext();

const LoginProvider = ({children}) =>{
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = () => setIsLogin(prev => !prev);

    return(
        <UserContext.Provider value={{isLogin,toggleLogin}}>
            {children}
        </UserContext.Provider>
    )
}
export default LoginProvider;