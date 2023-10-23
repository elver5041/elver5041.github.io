import React from "react";
import { useState } from "react";
import "./button.css";
const Button = ({name, func, sizes}) => {
    const [hovering, setHovering] = useState(false);
    const selected = hovering ? "focused" : "";
    let s2 = sizes?sizes:[100,100]
    const H = s2[0]
    const W = s2[1]
    return(
        <div className={selected+" button"} 
        style={{height:{H}, width:{W}}}
            onMouseEnter={() => {setHovering(true);}}
            onMouseLeave={() => {setHovering(false);}}
            onClick={() => func()}
            >
            <span>
                {name}
            </span>
        </div>
    );
};

export default Button;