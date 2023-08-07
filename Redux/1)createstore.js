import { createStore } from "redux";


function reducer(state,action){

  if(action.type == "addType"){
    return [
        ...state,{name:action.myName,age:action.myAge}
    ]
  }

  return state;

}


const initialState = [{name:"abhishek",age:22}]

const store = createStore(reducer,initialState);

console.log(store)

//the only way to update the store is using dispatching the action

store.dispatch({
  type:"addType",
  myName:"boss",
  myAge:24
})


console.log(store.getState())