// 여러곳에서 상태를 변경해야 할 경우 context api 를 이용해서 전역적으로 관리를 해보자
//userContext를 만들어서 인증상태에 따라 적절한 네비게이션이 렌더링 되도록 만들어보자
import React,{useState,createContext} from "react";


const UserContext = createContext({
    user: {email : null, uid : null},
    dispatch: () => {}
})

const UserProvider = ({children}) => {
    const [user, setUser] = useState([]);
    
    const dispatch = ({email, uid}) => {
        setUser({email, uid});
    }


const value = {user, dispatch}
return(
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
)
}
export {UserContext, UserProvider};