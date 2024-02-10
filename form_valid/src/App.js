import React, { useState,useEffect } from 'react';
import { Alert } from 'antd';
import './App.css';
let myResultName = false;
let myResultEmail = false;
let myResultNumber = false;
let myResultMessage = false;
function App() {
  const formData = () => {
    let getData = localStorage.getItem("Form");
    return getData ? JSON.parse(getData) : [];
  }
  const [valueOne, updateValueOne] = useState("");
  const [valueTwo, updateValueTwo] = useState("");
  const [valueThree, updateValueThree] = useState("");
  const [valueFour, updateValueFour] = useState("");
  const [validOne, updateValidOne] = useState("");
  const [validTwo, updateValidTwo] = useState("");
  const [validThree, updateValidThree] = useState("");
  const [validFour, updateValidFour] = useState("");
  const [submBtn, updateSubmitBtn] = useState(formData());
  const [showAlert,upShowAlert] = useState(false);
  const [exist,upExist] = useState(false);
  const onBlurOne = () => {
    if (valueOne.match(/^[a-z\_0-9]{3,13}/)) {
      myResultName = true;
    } else {
      updateValidOne("🔴 Please Enter a User Name");
      setTimeout(() => {
        updateValidOne("");
      }, 3000);
      myResultName = false;
    }
  }
  const onBlurTwo = () => {
    if (valueTwo.match(/^([a-z\_0-9]+)[@]([a-z]+)\.([a-z]){2,6}/)) {
      myResultEmail = true;
    } else {
      updateValidTwo("🔴 Please Enter a Valid Email");
      setTimeout(() => {
        updateValidTwo("");
      }, 3000);
      myResultEmail = false;
    }
  }
  const onBlurThree = () => {
    if (valueThree.match(/^[0-9]{11}/)) {
      myResultNumber = true;
    } else {
      updateValidThree("🔴 Please Enter Number Only 11 Digit");
      setTimeout(() => {
        updateValidThree("");
      }, 3000);
      myResultNumber = false;
    }
  }
  const onBlurFour = () => {
    if(valueFour != ""){
      myResultMessage = true;
    }else{
      updateValidFour("🔴 Please Enter Your Message");
      setTimeout(() => {
        updateValidFour("");
      }, 3000);
      myResultMessage = false;
    }
  }
  const submitForm = (e) => {
    e.preventDefault();
    if(valueOne == "" || valueTwo == "" || valueThree == "" || valueFour == ""){
      // alert("Please Fill all the Fields");
      upShowAlert(true);
      setTimeout(() => {
        upShowAlert(false);
      }, 4000);
    } else if( submBtn.emailValue == submBtn.emailValue  || submBtn.numberValue == submBtn.numberValue ){
      // alert("This is already exists");
      upExist(true);
    }
    else{
      alert("Congratulation, 🥳 Your Form has been submit");
      updateSubmitBtn([...submBtn,{
        nameValue : valueOne,
    emailValue : valueTwo,
    numberValue : valueThree,
    messageValue : valueFour,
      }])
      updateValueOne("");
      updateValueTwo("");
      updateValueThree("");
      updateValueFour("");
      
    }
  }
  useEffect(() => {
    localStorage.setItem("Form",JSON.stringify(submBtn));
  },[submBtn])
  return (
    <>
    <h1 style={{textAlign:'center',}}>Form Validation</h1>
    {showAlert ?  <Alert
      message="Error"
      description="Please Fill all the Fields"
      type="error"
      closable />:'' }
      {exist ?  <Alert
      message="Error"
      description="This Email and Phone Number has already exist. "
      type="error"
      closable />:'' }
      <form action="" onSubmit={submitForm} style={{marginTop:'10px'}} className="form-container">
        <label htmlFor="">Username</label>
        <input type="text" name="user" id="" onChange={(e) => updateValueOne(e.target.value)} value={valueOne} onBlur={onBlurOne} placeholder="Enter Your Name" />
        <p style={{ color: 'crimson', }}>{validOne}</p>
        <label htmlFor="">Email Address</label>
        <input type="text" name="email" id="" onChange={(e) => updateValueTwo(e.target.value)} value={valueTwo} onBlur={onBlurTwo} placeholder="Enter Your Email" />
        <p style={{ color: 'crimson', }}>{validTwo}</p>
        <label htmlFor="">Phone Number</label>
        <input type="text" name="number" id="" onChange={(e) => updateValueThree(e.target.value)} value={valueThree} onBlur={onBlurThree} placeholder="Enter Your Phone" />
        <p style={{ color: 'crimson', }}>{validThree}</p>
        {/* <label for="">Select Your Company</label>
            <select name="" id="opt">
                <option value="">Select Your Company</option>
                <option value="Open AI">Open AI</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Google">Google</option>
            </select> */}
        <label htmlFor="">Enter Your Query</label>
        <textarea name="message" id="message" onChange={(e) => updateValueFour(e.target.value)} value={valueFour} onBlur={onBlurFour} cols="30" rows="10" placeholder="Enter Your Message"></textarea>
        <p style={{ color: 'crimson', }}>{validFour}</p>
        <button className="btn"  >Submit</button>
      </form>
      <table border={1}>
            <thead>
             <tr>
             <th>User Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Message</th>
             </tr>
            </thead>
            <tbody>
            {
              submBtn.map((element,index) => {
                return(
                  <tr key={index}>
              <td>{element.nameValue}</td>
              <td>{element.emailValue}</td>
              <td>{element.numberValue}</td>
              <td>{element.messageValue}</td>
            </tr>
                );
              })
            }
            </tbody>
      </table>
    </>
  );
}

export default App;
