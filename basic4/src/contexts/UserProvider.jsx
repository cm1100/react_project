import { createContext, useContext } from "react";



const UserContext = createContext();


export default function UserProvider({children}){

    return (
        <UserContext.Provider value='John'>
            {children}
        </UserContext.Provider>
    )
}

export const useUserData=()=>useContext(UserContext)