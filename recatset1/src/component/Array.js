import React,{useState} from "react";
const options =[ 'Bell Paper', 'Sausage', 'Pepperoni','Pineapple'];

function PersonalPizza(){
    const [selected, setSelected] = useState([]);

    const toggleTopping =({target}) => {
        const clickedTopping = target.value;
        setSelected((prev) => {
            if(prev.includes(clickedTopping)) {
                return prev.filter(t => t !== clickedTopping)
            } else {
                return[clickedTopping, ...prev];
            }
        });
    };

    return(
        <div>
            {options.map(option => (
                <button value={option} onClick={toggleTopping}></button>
            ))}
        </div>
    )
}
export default PersonalPizza;