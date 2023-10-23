import React from "react";
import Button from "../components/button/Button";
const TestScreen = () => {
    return(  
    <div>
        <Button name="game" func={()=>console.log("b")} sizes={[100,100]}/>
        <Button name="game2" func={()=>console.log("a")} sizes={[100,100]}/>
    </div>
    );
};

export default TestScreen;