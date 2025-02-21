import React,{useState} from "react";
const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle',
                             'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

function Colorpicker2(){
    const[color, setColor] = useState("Tomato");
    const divStyle = {background : color};

    return(
        <div style={divStyle}>
            <p>Selected color: {color} </p>
            {colorNames.map((colorNames) =>
            <button onClick={() => setColor(color)} key={colorNames}> {colorNames} </button>
            )}

        </div>
    );
}
export default Colorpicker2;