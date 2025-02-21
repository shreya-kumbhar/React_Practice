import React, { useState} from "react";
function Arrayhooks1(){
    const [items, setItem] = useState([])
    console.log(items);
    function addItems(){
       setItem([...items,{
           id: items.length,
           value: Math.random()
       }])
    }
    return(
        <div>
         <ol>
             {items.map(item => (
                 <li key={item.id}>{item.value}</li>
             ))}
         </ol>
            <button onClick={addItems}>Add Item</button>
        </div> 
    )
}
export default Arrayhooks1;