import Todoitem from "./Todoitem";

const TodoItems = ({items,onDeleteClick}) => {
  
  return (
    <>
    <div className="item-container"> 
    {items.map( (item) =>(
      <Todoitem key={item.itemName} itemName={item.itemName} itemDate={item.itemDate} onDelete={onDeleteClick}/>
    ))}
    </div>
    </>
  );
}
export default TodoItems