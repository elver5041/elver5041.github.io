import React from "react";
import "./table.css";
const Table = ({contents}) => {
    return(
        <table>
            <thead>
                <tr>
                    {contents[0].map((item,i) => <th key={i}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {contents.slice(1).map((list,i) => <tr key={i}>{list.map((item,j)=><th key={j}>{item}</th>)}</tr>)}
            </tbody>
        </table>
    );
};

export default Table;