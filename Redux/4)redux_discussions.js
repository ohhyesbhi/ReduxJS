import { createStore } from "redux";

const state = {
    users:[
        {
            id:1,
            name:"sanket",
            todo : [
                {id:1,name:"complete the deployment"},
                {id:2,name:"remove the bug"}

            ]
        },
        {
            id:2,
            name:"abhishek",
            todo:[
                {id:1,name:"complete ppt"},
                {id:2,name:"take the interview"}
            ]
        },{
            id:3,
            name:"jd",
            todo:[
                {id:"1",name:"plan the sprint"}
            ]
        }
    ]
}

// this is very bad way to write the code

function reducer(state,action){
    if(action.type == "EDIT_TODO"){
        let newData = action.name;
        const newState = state.map((user)=>{
            if(user.id == action.userId){
                let newTodos = user.todos.map((todo)=>{
                    if(todo.id == action.TodoId){
                        todo.name = newData;
                    }
                    return todo;
                })
            user.todo = newTodos;
            }
            return user;
        })
    }
}