import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name : "todos",
    initialState : [],
    reducers : {
        addTodo : (state,action) =>{
            state.push({ id : action.payload.id, title : action.payload.title })
        },
        removeTodo : (state,action) =>{
        return state.filter(todo=> todo.id != action.payload)
        },
        editTodo : (state,action) =>{
            state = state.map((todo)=>{
                if(todo.id == action.payload.id){
                    todo.title = action.payload.title;
                }
                return todo;
            })
        }
    }
})

export default todoSlice;