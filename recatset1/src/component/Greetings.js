import React from 'react';
function greeting(props){
    if(props.signed === false)
    {
        return <h1>Please login.</h1>
    }
    else{
        return (
            <>
            <h1>Welcome back, {props.name}!</h1>
                <article>
                    Latest Movie: Acomputer bugs Life
                </article>
            </>
        )
    }
}
export default greeting;