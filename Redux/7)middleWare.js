import { applyMiddleware, createStore } from "redux";

const store = createStore(reducer,{},applyMiddleware(logger1,logger2));

store.dispatch({type:"hello"});


function reducer(state="hello",action){

    if(action.type == "hello" ){
          console.log("inside reducer");
    }

}


function logger1(){                              
return next => action =>{
    console.log("inside logger1");
    const returnValue = next(action);
    console.log("after execution of reduce function we are executing the remaining statements from logger1")
} 
}

function logger2(){
    return next => action =>{
        console.log("inside logger2");
        const returnValue = next(action);
        console.log("after execution of reduce function we are executing the remaining statements from logger2")
    } 
}