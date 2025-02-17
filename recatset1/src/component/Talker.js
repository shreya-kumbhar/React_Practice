import React from "react";
import Button from "./Button";

function Talker(){
    function Talk(){
        let speech= '';
        for(let i=0; i < 10000; i++)
        {
            speech += 'GyriInfotech';
        }
        alert(speech);
    }
    return<Button Talk={Talk}/>;
}
export default Talker;