import { MdDelete } from "react-icons/md";
const Todoitem =({itemName,itemDate,onDelete})=>{
  const HandelDeleteButton=()=>{
    onDelete(itemName);
  }
  return(
    <>
     <div className="row">
    <div className="col">{itemName} </div>
    <div className="col">{itemDate}</div>
    <div className="col"><button type="button" className="btn btn-danger" onClick={HandelDeleteButton}><MdDelete /></button></div>
    </div>
    </>
  );
}
export default Todoitem