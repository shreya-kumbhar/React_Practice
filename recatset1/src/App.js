import React from 'react';
import greetings from "./component/Greetings";
import Greetings from "./component/Greetings";

function App(){
    return(
    <div>
        <h1>MovieFlix</h1>
        <Greetings name="Shreyaa" signedIn={true}/>

    </div>
    );
}
export default App;