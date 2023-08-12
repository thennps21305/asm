import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        getAllTodo:(state,action)=>{
            return action.payload
        },
        deleteTodo:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }
})
export const {getAllTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer