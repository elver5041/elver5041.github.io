import React from "react";
import "./table.css";
const Table = ({contents}) => {
    return(
        <table>
            <thead>
                <tr>
                    {contents[0].map((item) => <th>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {contents.map((list,i) => i && <tr key={i}>{list.map((item)=><th>{item}</th>)}</tr>)}
            </tbody>
        </table>
    );
};

export default Table;