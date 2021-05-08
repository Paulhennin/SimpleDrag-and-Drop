import React from 'react'

function Card (props) {

    const dragStart = event => {
        const target = event.target;
        event.dataTransfer.setData('card_id', target.id);
    }

    const dragOver = event =>{

        event.stopPropagation();
    }
    return(
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}

export default Card