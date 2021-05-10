import React from 'react';

function Board(props){
    return(
        <div 
            id={props.id}
            className={props.className}
            onDrop={props.drop}
            onDragOver={props.dragOverB}
        >
            { props.children }
        </div>
    )
}

export default Board