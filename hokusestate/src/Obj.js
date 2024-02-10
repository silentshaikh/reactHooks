import React, {useState} from 'react';

function Obj() {
    const [obj,updateObj] = useState({name:"Abdul Moiz",course:"AI"});
    const clickOn = () => {
        updateObj({...obj,name:"Ben"});
    }
  return (
    <>
      <p><strong>Name :</strong> {obj.name} , <strong>Course :</strong> {obj.course}</p>
      <button onClick={clickOn}>Click</button>
    </>
  )
};
export default Obj;