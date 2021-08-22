import React, { useState } from "react";

const TenLittleMonkeys = () => {
    const [count, setCount] = useState(10);
    const [isDisabled, setIsDisabled] = useState(false)
    function handleClick(e) {
        console.log("Button Was Clicked");
        setCount(count - 1);
        if (count - 1 === 0){
            setIsDisabled(true)
        }
        // count++;
        console.log(count);
      }
    return ( 
        <div>
            
            <p>{count} little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!</p>
            {count < 1 ? <p>All the Monkeys fell off</p> : null}
            <button onClick={handleClick} disabled={isDisabled}>CLICK ME</button>
            
        </div>
     );
}
 
export default TenLittleMonkeys;