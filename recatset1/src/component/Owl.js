import React from 'react';
const owl = {
    Shreyaa:"Nature view",
    Infotech:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s"
}
function Owl(){
    return(
        <div>
            <h1>{owl.Shreyaa}</h1>
            <img
              src={owl.Infotech}
              alt={owl.Shreyaa}
            />
        </div>
    )
}
export default Owl;