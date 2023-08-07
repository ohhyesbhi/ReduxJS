import { createStore,bindActionCreators } from "redux";


function reducer(state,action){

  if(action.type == "addType"){
    return [
        ...state,{name:action.myName,age:action.myAge}
    ]
  }

  return state;

}


const initialState = [{name:"pratik",age:22}]

const store = createStore(reducer,initialState);
const bind = bindActionCreators({addItems},store.dispatch)



function addItems(name,age){ 
    return {
        type:"addType",
        myName:name,
        myAge:(age)?age:"1"
    }
}


bind.addItems("abhishek",22)

bind.addItems("arpit")

console.log(store.getState())

