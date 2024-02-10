import React, { useState } from 'react';
function List() {
    let arr = ["This is a List","This is a Todo","Banana","Guava","Pineapple"];
    const [item,updateItem] = useState(arr);
    const onEpmty = () => {
        updateItem([]);
    }
    return(
        <>
            <ul>
            {
                item.map((element,index) => {
                    return <li key={index} >{element}</li>;
                })
            }
        </ul>
        <button onClick={onEpmty}>Click</button>
        </>
    );
}
export {List};
