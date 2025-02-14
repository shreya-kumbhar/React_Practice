import React from 'react';
function Picture(){
    return <img src="https://t3.ftcdn.net/jpg/01/84/70/82/360_F_184708212_OEq2Y6AqmiNSqSxwdPIUCVZDOCE1nlb2.jpg"/>
}

function Details(){
    return(
        <div>
            <Picture/>
            <h1>Name: baby elephant</h1>
            <h2>Age: 5</h2>
            <h2>Color: brown</h2>
        </div>
    );
}
export default Details;