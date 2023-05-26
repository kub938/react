import { useState } from "react";

function PtCoponet(props) {
    return (
        <div>
            <input type="text" onChange={props.ptagChange} />
        </div>
    );

}

export default PtCoponet;