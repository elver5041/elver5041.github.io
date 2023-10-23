import React from "react";
import "./header.css";
import Button from "../button/Button";
const Header = ({changer, allscreens}) => {
    return(
        <div style={{background:"#EEE", display: "flex"}}>
            {allscreens.map((item)=> <Button name={item} func={()=>changer(item)} sizes={[20,100]}/>)}
        </div>
    );
};

export default Header;