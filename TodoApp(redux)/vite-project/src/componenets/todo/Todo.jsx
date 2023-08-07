import React, { useState } from 'react';
import todoSlice from '../../slices/TodoSlice';
import { useDispatch } from 'react-redux';

function Todo({title,id}) {

  const dispatch = useDispatch()
  const [edit,setEdit] = useState(true);
  const [text,setText] = useState("");

  function editing(){
    dispatch(todoSlice.actions.editTodo({id:id,title:text}))
    setEdit(true)
  }

  function deleteTodo(){
    console.log(id)
      dispatch(todoSlice.actions.removeTodo(id))
  }
  
  return (
 <>
 {
  (edit)?
  (<div>
  <span>{title}</span>
  <button onClick={()=>setEdit(false)}>edit</button>
  <button onClick={()=>deleteTodo()}>Delete</button>
  </div>):
  <div>
  <input onChange={(e)=>setText(e.target.value)}/>
  <button onClick={()=>editing()}>save</button>
  <button onClick={()=>deleteTodo()}>Delete</button>
  </div>
}
 </>
  )
}

export default Todo
