import React,{useState} from 'react';
import '../Accordian/accordian.css';
import {AiOutlinePlus} from 'react-icons/ai';

function Accordian({key,question,answer}) {
const [togg,clickTogg] = useState(false);
const [rot,updRot] = useState('');
    const clickBnt = () => {
        if(togg == false){
            clickTogg(true);
            updRot("rotate(135deg)");
        }else{
            clickTogg(false);
            updRot("")
        }
    }
  return (
   <>
 
            <div key={key} className='card'>
                        <div className="ques">
                    <AiOutlinePlus className='icon' style={{transform:rot}}  onClick={clickBnt} />
                    <p>{question}.</p>
                </div>
              {togg &&  <div className="ans">
                    <p>{answer}</p>
                </div>}
                </div>
</>
  )
}

export default Accordian;
