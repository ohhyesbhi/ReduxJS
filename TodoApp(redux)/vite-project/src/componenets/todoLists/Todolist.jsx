
import {useSelector} from "react-redux";
import Todo from '../todo/Todo';
import Input from "../todoInputs/Input";

function Todolist() {

   const todoLists = useSelector((state)=> state);

  return (
  <>
  <Input/>
   {
    todoLists && todoLists.map((todo)=><Todo title={todo.title} key={todo.id} id={todo.id}/>)
   }
  </>
  )
}

export default Todolist;


