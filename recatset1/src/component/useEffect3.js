import React, {useState , useEffect} from 'react';
function Counter(){
    const [clickCount, setClickCount] = useState(5);

    const increment = () => setClickCount((prev) => prev + 1);

    useEffect(() => {
       document.addEventListener('mousedown' , increment);
     return() => {
       document.removeEventListener('mousedown' , increment );
     };
    });

    return(
        <h1> Document Clicks: {clickCount}</h1>
    )
}
export default Counter;