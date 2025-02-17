import React from "react";
import Button from "./Button";
function Talker2(){
    function talk(){
        let speech = '';
        for(let i=0; i<10000; i++)
        {
            speech += 'Shreyaaaaa';
        }
        alert(speech);
    }
  return<Button Talk={talk} />;
}
export default Talker2;
