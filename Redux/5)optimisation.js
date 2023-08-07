import { createStore, combineReducers, applyMiddleware } from 'redux';

const state = {
    users : [
        {id:"1",name:"abhishek"},
        {id:"2",name:"shiva"},
        {id:"3",name:"vishnu"}
    ],
    todos : [

     {userId:1,todoId:1,name:"complete deployment"},
     {userId:1,todoId:2,name:"raise the bug"},          // user 1
     
     {userId:2,todoId:1,name:"complete the ppt"},       // user 2
     {userId:2,todoId:2,name:"take interview"},

     {userId:3,todoId:1,name:"plan the sprint"},        // user 3
    ]
}
function reducer(state,action){
   if(action.type == "EDIT_TODO"){
        let todo = state.todos;
        let newTodos = todo.map((item)=>{
           if(item.id == action.todoId && item.userId == action.userId){
            todo.name = action.name;
           } 
           return todo;
        }) ;
        return {...state,todos:newTodos}
    }

    if(action.type == "ADD_USERS"){
        let addUser = {id:action.userId , name:action.userName};
        let newUsers = [...state.users,addUser];
        return {...state,users:newUsers}
    }
}

// this is for edit todo sp what if we want to add the user we have to write another function for
// (action.type == "ADD_USER") so wee can see many actions will be getting executed if we write many conditions
