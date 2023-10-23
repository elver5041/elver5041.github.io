import React from "react";
import Table from "../components/table/Table";

const TimeTable = () => {
    const times = [
        ["",     "monday", "tuesday/thursday", "friday", "saturday", "sunday"],
        ["i wake up at:","","","","",""]
    ]
    return(
        <div>
            <Table contents={times}/>
        </div>
    );
};

export default TimeTable;