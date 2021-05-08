import React from 'react'

function Card (props) {

    const dragStart = event => {
        const target = event.target;
        event.dataTransfer.setData('card_id', target.id);
        var board = target.parentNode;
        console.log(target.parentNode);
        setTimeout(() => {
            target.style.display = "none";
        },0);
        return board;
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