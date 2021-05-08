import React from 'react';

function Board(props){
    const drop = event => {
        event.preventDefault();
        const card_id = event.dataTransfer.getData('card_id');
        console.log('coucou', event.target.id);
        const card = document.getElementById(card_id);
        card.style.display = 'block';

        event.target.insertBefore(card, event.target.nexSibling);
    }

    const dragOver = event => {
        event.preventDefault();

    }
    return(
        <div 
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}

export default Board