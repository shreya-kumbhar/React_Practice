import React,{useState} from "react";
function EmailTeaxtInput(){
    const [email, setEmail] = useState();

    const handleChange = (event) => {
        const updateEmail = event.target.value;
        setEmail(updateEmail);
    }

    return (
        <div>
            <p>Click here and enter your mobile number</p>
            <input value={email} onChange={handleChange}/>
        </div>

    );
}

export default EmailTeaxtInput;