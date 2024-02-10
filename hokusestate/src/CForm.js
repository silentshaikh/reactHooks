import React,{useState} from 'react';

function CForm() {
    const [inpValue,updateValue] = useState("");
    const [inpValueOne,updateValueOne] = useState("");
  return (
    <>
      <h1>Form Control</h1>
      <p>{inpValue},{inpValueOne}</p>
      <form className='form' action="">
        <input type="text" name="" id="" value={inpValue} onChange={(e) =>  updateValue(e.target.value)} /><br /><br />
        <input type="text" name="" id="" value={inpValueOne} onChange={(e) =>  updateValueOne(e.target.value)} /><br /><br />
        <button>Submit</button>
      </form>
    </>
  )
};
export default CForm;