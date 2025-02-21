import React,{useState} from "react";

function ToggleLoading(){
    const[isloading, setIsLoading] = useState(true);

    return(
        <div>
            <p>The Data is {isloading ? 'Loading' : 'Not Loading'}</p>
            <button onClick={() => setIsLoading(true)}> Turn Loading On </button>
            <button onClick={() => setIsLoading(false)}> Turn Loading Off </button>

        </div>
    );
}
export default ToggleLoading;