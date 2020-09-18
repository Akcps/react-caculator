import React from 'react';

function Key(props) {
    return(
        <button 
            name={props.name}
            onClick={() => props.onClick(props.name)}
        >
            {props.name}
        </button>
    )
}

export default Key;