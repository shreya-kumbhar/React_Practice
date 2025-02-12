import React from 'react';
function Picture() {
    return <img src="https://www.shutterstock.com/image-photo/wild-african-elephants-baby-elephant-600nw-2462541445.jpg" width="500"/>;

}

function Profile()
{
    return(
        <>
          <Picture />
            <h1> Name: octavia </h1>
            <h1> Spices: Octopus </h1>
            <h1> Class: Cephalopoda </h1>
        </>
    );
}
export default Profile;