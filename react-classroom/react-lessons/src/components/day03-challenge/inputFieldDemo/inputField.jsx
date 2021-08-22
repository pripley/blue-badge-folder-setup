import React, { useState } from 'react';

const InputField = (props) => {
    const[username, setUsername] = useState("paul@test.com")

    function handleOnChange(e){

        setUsername(e.target.value)
        console.log(e.target.value)
        
    }
    return (<div>
        <p>Hello from Inputfield</p>
        <input type="text" value={username} onChange={handleOnChange}></input>
    </div>  );
}
 
export default InputField;