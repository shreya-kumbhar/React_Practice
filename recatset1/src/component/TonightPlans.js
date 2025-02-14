import React from 'react';

const fiftyFifty = Math.random();

function TonightPlan() {
    if(fiftyFifty){
        return <h1>"If I wake up early, I will reach work on time."</h1>;
    }

    else{
        return <h1>"If we save money, we can go on vacation next year."</h1>;
    }
}
export default TonightPlan;
