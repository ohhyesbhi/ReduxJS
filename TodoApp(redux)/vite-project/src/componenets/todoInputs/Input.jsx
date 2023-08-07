import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import todoSlice from '../../slices/TodoSlice';

function Input() {

    const dispatch = useDispatch()
    const todoList = useSelector((state)=>state)
    
    function f(){
        const lastTodo = (todoList.length == 0)?0:todoList[todoList.length-1].id;
      
       dispatch(todoSlice.actions.addTodo({title:text,id:lastTodo+1}))
    }

    const[text,setText] = useState("");
  return (
    <>
     <input
      type='text'
      placeholder='add todo...'
      value = {text}
      onChange = {(e)=>setText(e.target.value)}

     />
     <button onClick={f}>Add</button>
    </>
  )
}

export default Input
