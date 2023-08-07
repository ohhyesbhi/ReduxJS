import { createStore } from "redux";


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

console.log(store)


function addItems(name,age){ // this is action creator function (these are simple functions which returns the object and if we need
                             // to update we can do at one place    )
    return {
        type:"addType",
        myName:name,
        myAge:(age)?age:"1"
    }
}

store.subscribe(()=>console.log("actually helps us to get to know about state update(always shd write above dispatch function)"))


// this becomes less maintainable if we have to go and update all actions from all of the places they dispatched.
// So we can replace them ACTION CREATOR FUNCTIONS
store.dispatch(addItems("abhishek",22))

store.dispatch(addItems("arpit"))

console.log(store.getState())

