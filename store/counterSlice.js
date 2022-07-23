// creating reducers and action here and combined them in store.js file

import { createSlice } from "@reduxjs/toolkit";

// initialize state object

const initialState = {
    // state props here
    users:[]
}
export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser: (state,action) =>{
            state.users = [...state.users,action.payload]
        }
    }
})
// similarly we can make slice and initial state of different reducers





//wherever you want to update data import addUser slice in that file
// export const {addUser} = usersSlice.actions
//update data by using #TODO: store.dispatch(addUser(pass data))
//we get store from wrapper of nextJS
// export const getServerSideProps = wrapper.getServerSideProps( store = () =>{
    // fetch data and update data or mutate data
// })

export default usersSlice.reducer
// 

// createSlice({
// 1] name
// 2] initialState
// 3] reducers:{
//     create action : () => {
//         update state
//     }
// }
// })
// export action and every action is present inside counterSlice.actions
// export const counterSlice = createSlice({
//     name:'counter  or state name'
// })