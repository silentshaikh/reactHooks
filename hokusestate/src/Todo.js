import React, {useState} from 'react';
function Todo() {
    const [inpValue,updateValue] = useState("");
    const [item,updateItem] = useState([]);
    const addList = () => {
       if(inpValue == ""){
        alert("pagal likh to shi 😠")
       }else{
        updateItem([...item,inpValue]);
        updateValue("");
       }
    }
  return (
    <>
      <h1>Todo - App</h1>
      <input type="text" name="" id="" value={inpValue} onChange={(e) => updateValue(e.target.value)}  />
      <button onClick={addList}>Add </button>
      <ul>
        {
            item.map((element,index) => {
               return  <li key={index}>{element}</li>
            })
        }
      </ul>
    </>
  )
}
export default Todo;
