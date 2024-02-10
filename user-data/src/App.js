import React, { useEffect, useState } from 'react';
import './App.css';
import { Avatar, Card , Divider ,Spin} from 'antd';
const { Meta } = Card;
function App() {
  const [myData,updData] = useState([]);
  const [mySpin,updSpin] = useState(true)
  const getUser = async () => {
   try {
     let userFetch = await fetch('https://jsonplaceholder.typicode.com/photos');
     let userData = await userFetch.json();
     updSpin(false)
    updData(userData);
   } catch (error) {
     updSpin(false);
    alert("The Error is :" + error);
   }
  }
  useEffect(() => {
    getUser();
  },[])
  if(mySpin){
    return <Spin size='large' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'70px',}}/>;
  }
  return (
    <>
    <h1>Get User Data</h1>
    <div className="conat">
    <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
    <Divider/>
    <div className="follow">
      <div className="b1">
        <h5>Followers</h5>
        <p>3M</p>
      </div>
      <div className="b1">
        <h5>Rating</h5>
        <p>3M</p>
      </div>
    </div>

  </Card>
  {
    myData.map((element,index) => {
    return(  
      <div className="box" key={index}>
      <Card 
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={element.url}
      />
    }
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Tom"
      description={element.title}
    />
    <Divider/>
    <div className="follow">
      <div className="b1">
        <h5>Followers</h5>
        <p>3M</p>
      </div>
      <div className="b1">
        <h5>Rating</h5>
        <p>3M</p>
      </div>
    </div>

  </Card>
      </div>
  );
    })
  }
    </div>
    </>
  );
}

export default App;
