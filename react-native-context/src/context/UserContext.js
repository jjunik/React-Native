import React, {useState, createContext, useReducer} from "react";

const UserContext = createContext();

const LoginProvider = ({children}) =>{
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = () => setIsLogin(prev => !prev);
    const value = {user : {isLogin}, dispatch : toggleLogin}
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
const LoginConsumer = UserContext.Consumer
export default LoginProvider;