import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const TitleColorContextProvider = ({children}) =>{
    return <TitleColorContextProvider>{children}</TitleColorContextProvider>

}