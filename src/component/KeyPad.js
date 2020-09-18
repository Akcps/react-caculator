import React  from 'react';
import Key from "./Key";

function KeyPad(props) {

    const keysJson = 
    [   ["(", "CE", ")", "C"],
        ["1", "2", "3", "+"],
        ["4", "5", "6", "-"],
        ["7", "8", "9", "*"],
        [".", "0", "=", "÷"]
    ];
    const Keys = keysJson.map(
        key => key.map(
            k =><Key key={k} onClick={props.onClick} name={k}/>
        )
    );

    return(
        <div>{Keys}</div>
        
    )
}

export default KeyPad;