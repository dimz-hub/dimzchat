import React, {createContext, useContext, useReducer} from "react";
import {reducerCases} from './Constants'
import {useAuthContext} from './AuthContext'


const ChatContext = createContext()


export const ChatContextProvider = ({ children}) => {

    const {currentUser} = useAuthContext()
    

const initialState = {
    chatId: null,
    user: {}
}

const chatReducer= (state, action) => {

    switch(action.type) {
        case reducerCases.change_user : {
            return {
                user:action.payload,
                chatId: currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid 
                : action.payload.uid + currentUser.uid

            }
        }
        default :
        return state
    }

}
const [state, dispatch] = useReducer(chatReducer,initialState)

return (
    <ChatContext.Provider value = {{data:state, dispatch}}>
        {children}
    </ChatContext.Provider>
)

    
}

export const useChatContext = () => useContext(ChatContext)
