import React,{useState, useEffect} from "react";
function Timer(){
    const [time, setTime] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };
    }, []);

    const handleChange = ({ target })  => setName(target.value);

    return(
        <>
        <h1> Click:{time}</h1>
        <input value={ name } onChange={handleChange} type='text'/>
        </>
    );
}
export default Timer;