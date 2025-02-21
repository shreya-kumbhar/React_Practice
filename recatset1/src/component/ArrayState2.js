import React,{useState} from "react";
function Login(){
    const [fromState, setFromState] = useState({});

    const handleChange =({target}) => {
        const{name, value} = target;
        setFromState((prev) => ({
            ...prev,
            [name]:value
        }));
    };
  return(
      <form>
         <input
             value={fromState.firstName}
             onChange={handleChange}
            // name="firstname"
             placeholder="First Name"
            type="text"
         />
         <input
           value={fromState.password}
           onChange={handleChange}
           // name="password"
           placeholder="Password"
           type="password"
         />
      </form>
  );
}
export default Login;