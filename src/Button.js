import React from "react";
import { useState } from "react";
const Button = ({name}) => {
    const [hovering, setHovering] = useState(false);
    const selected = hovering ? "focused" : "";
    return(
        <div className={selected+" button"}
        onMouseEnter={() => {setHovering(true);}}
        onMouseLeave={() => {setHovering(false);}}>
            <p>{name}</p>
        </div>
    );
};
export default Button;