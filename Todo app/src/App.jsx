import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import TodoItems from './component/TodoItems'
import WelcomeMessage from './component/WelcomeMessage'

function App() {
  const [items,setitems]=useState([]);

  const handelNewItem=(itemName,itemDate)=>{
    const newTodoitems = [...items,{itemName:itemName,itemDate:itemDate},];
    setitems(newTodoitems);
  };

  const handelDeleteitem =(itemName)=>{
    const newTodoitems = items.filter((item) => item.itemName !== itemName);
    setitems(newTodoitems);
      }

  return (
    <>
   <div className="TodoContainer">
     <center>TODO App</center>
     <div className="container text-center">
      <AddTodo onNewItem={handelNewItem}/>   
       {items.length ===0 && <WelcomeMessage/>}
      <TodoItems items={items} onDeleteClick={handelDeleteitem}/>
    </div>

   </div>
    </>
  );
}

export default App
