import React from 'react';

const friends = [

    {
        title: "baby cat",
        src:"https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        title: "baby dog",
        src:"https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];
function Friend(){
    const friend0 = friends[0];
    const friend1 = friends[1];

    return (
        <div>

            <h1>{friend0.title}</h1>
            <img src={friend0.src}/>

            <h1>{friend1.title}</h1>
            <img src={friend1.src}/>
        </div>

    )
}

export default Friend;