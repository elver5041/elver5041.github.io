import React from "react";
import "./header.css";
import Button from "../button/Button";
import { screens } from "../../App";
const Header = ({changer}) => {
    return(
        <div style={{background:"#EEE", display: "flex"}}>
            {Object.values(screens).map((val, i) => (<Button key={i} name={val[0]} func={()=>changer(val[0])} sizes={[20,100]}/>))}
        </div>
    );
};

export default Header;