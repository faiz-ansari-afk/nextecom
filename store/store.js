import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createContext } from "react";
import theme from "./themeSlice";
// import { createWrapper, HYDRATE } from "next-redux-wrapper";
// import counterSlice from "./counterSlice"; // reducer and action
export const Store = createContext();

const initialState = {
    darkMode:false
}
export function StoreProvider(props){
    const 
}
// => {
//     configureStore({
//         reducer: theme,
//     })
// }

// // //create slice in different files
// // // combine them here
//const combinedReducers = combineReducers({
//     counterSlice //pass all reducers here
// })
// const masterReducer = (state,action) =>{
//     if(action.type === HYDRATE){
//         const nextState = {
//             ...state, // prev state value
//             //update each of state slice that were updated during server side
//             //updating counter eg:
//             //counter:{ count: state.counter.count + action.payload.counter.count} slice 1
//             // users eg: users: [...action.payload.users.users, ...state.users.users]   slice 2
//         }
//         return nextState;
//     }
//     else{
//         return combinedReducers(state,action)
//     }
// }
// export const makeStore = () =>{
//     configureStore({
//         reducer:masterReducer
//     })
// }
// export const wrapper = createWrapper(makeStore)
// // //install two more package react-redux next-redux-wrapper
// // // react-redux enable you to use dispatch and getState value func in react component on client side
// // // import createWrapper from next-redux-wrapper
