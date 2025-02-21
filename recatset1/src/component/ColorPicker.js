import React,{useState} from "react";
 function ColorPicker(){
    const[color,setColor] = useState();
    const divStyle = {backgroundColor : "yellow"};

    return(
        <div style={divStyle}>
            <p>The Color is { color }</p>
            <button onClick={() => setColor("Read")}> Read </button>
            <button onClick={() => setColor("Pink")}> Pink </button>
            <button onClick={() => setColor("Yellow")}> Yello </button>
            <button onClick={() => setColor("Babypink")}> Babypink </button>

        </div>
    );
}
export default ColorPicker;
