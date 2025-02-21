import React,{useState} from "react";
 
function Counter(){
    const [count, setCount] = useState();

    const increment = () => setCount(setCount => setCount + 1);

    return(
        <div>
            <p>You are cliking that button: {count} times</p>
            <button onChange={increment}> Click Here !! </button>

        </div>
    )
}
export default Counter;