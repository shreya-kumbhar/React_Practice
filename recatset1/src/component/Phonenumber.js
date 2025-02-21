import React,{useState} from "react";
const validPhoneNumber = /^\d { 1, 10}$/;

function PhoneNumber(){
    const [phone, setPhone] = useState();

    const handleChange = ({taget}) => {
        const newPhone=taget.value;
        const isValid = validPhoneNumber.test(newPhone);

        if(isValid){ setPhone(newPhone);}
    };

    return(
        <div ClassName='phone'>
         <lebel for='phone-input'> Phone: </lebel>
            <input value={phone} onChange={handleChange} id='phone-input'/>
        </div>
    );
}
export default PhoneNumber;