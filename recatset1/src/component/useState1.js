import React,{useState, useEffect} from "react";
function PageTitle(){
    const [name, setName] = useState('');

    useEffect(() => {
      document.title = `Hi, ${name}`;
    });

    return(
       <div>
           <p> Use The Input Field Below To Rename This Page !! </p>
        <input
         onChange={({target}) => setName(target.value)}
         value={name} type='text'
        />
       </div>
    );
}
export default PageTitle;