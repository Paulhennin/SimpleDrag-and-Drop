import React from 'react'

function Card (props) {

    return(
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={props.dragStart}
            onDragOver={props.dragOver}
        >
            { props.children }
        </div>
    )
}

export default Card