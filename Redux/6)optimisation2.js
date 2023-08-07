import { createStore, combineReducers } from 'redux';

const state = {
    users : [
        {id:"1",name:"abhishek"},
        {id:"2",name:"shiva"},
        {id:"3",name:"vishnu"}
    ]
,
    todos : [

     {userId:1,todoId:1,name:"complete deployment"},
     {userId:1,todoId:2,name:"raise the bug"},          // user 1
     
     {userId:2,todoId:1,name:"complete the ppt"},       // user 2
     {userId:2,todoId:2,name:"take interview"},

     {userId:3,todoId:1,name:"plan the sprint"},        // user 3
     
    ]
}

function userReducer(users = state.users,action){
    if(action.type == "ADD_USER"){
        let addUser = {id:action.userId , name:action.userName};
        let newUsers = [...users,addUser];
        return newUsers;
    } 
    return users
}

function todoReducer(todos=state.todos,action){

    if(action.type == "EDIT_TODO"){
        let newTodos = todos.map((item)=>{
           if(item.id == action.todoId && item.userId == action.userId){
            item.name = action.name;
           } 
           return item;
        }) ;
        return newTodos;
    }

    return todos;

} 


// now we can see we have made two reducers but in createStore you can see that we can only pass the single reducer now how to
// manage this . So now what we need a mechanism so that we can combine these reducers and make it into one single reducer

// so for that we have combineReducers

const combinedReducer = combineReducers({users: userReducer, todos : todoReducer});

const store = createStore(combinedReducer);

store.dispatch({type:"ADD_USER", userId:5 , userName:"Tanmay"})
console.log(store.getState());  
