import React,{useState, useEffect} from "react";
function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert(`Count: ${count}`);
    });

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return(
        <div>
            <p> You Clicked {count} times </p>
            <button onClick={handleClick}> Click me </button>
        </div>
    );
}
export default Counter;