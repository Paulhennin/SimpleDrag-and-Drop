import React from 'react'

function Card (props) {

    return(
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={props.dragStart}
            onDragOver={props.dragOver}
            onDragEnd={props.dragEnd}
        >
            { props.children }
        </div>
    )
}

export default Card