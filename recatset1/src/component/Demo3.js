import React,{useState} from "react";
function State_example(){
    const[data, setdata] = useState("Shubham");
       function Updatedata()
       {setdata("Harry")}

       return(
           <>
             <h1>{data}</h1>
               <button onClick={() => Updatedata()}> Updata </button>
           </>
       )
}
export default State_example;
