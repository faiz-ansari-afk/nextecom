import { createContext, useReducer } from "react";



export const ThemeStore = createContext();
const initialState = {
    darkMode:false
}
function reducer(state,action){
    switch (action.type){
        case 'DARK_MODE_ON':
            return {...state,darkMode}
    }
}

export function ThemeStoreProvider(props){
    const [state,dispatch] = useReducer(reducer,initialState)
}