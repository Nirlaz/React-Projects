import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";


const AddTodo = ({onNewItem})=>{
  const [todoName,setTodoName]=useState('');
   const [todoDate,setTodoDate]=useState('');
const handelNameChange = (event)=>{
  setTodoName(event.target.value);
}
const handelDateChange = (event)=>{
  setTodoDate(event.target.value);
}
const handelAddButton = ()=>{
  onNewItem(todoName,todoDate);
  setTodoDate('');
  setTodoName('');
}
  return(
    <>
    <div className="row">
    <div className="col"><input type="text" placeholder='Todo Items' onChange={handelNameChange} value={todoName}/></div>
    <div className="col"><input type="date" name="" id="" onChange={handelDateChange} value={todoDate}/></div>
    <div className="col"><button type="button" className="btn btn-success" onClick={handelAddButton}><BiMessageAdd /></button>
    </div>
    </div>
    
    </>
  );
}
export default AddTodo