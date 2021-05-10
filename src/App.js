import React from 'react'
import Board from './components/Board'
import Card from './components/Card'

class App extends React.PureComponent {
  state = {
    position: '',
  };

  dragStart = event => {
    const target = event.target;
    event.dataTransfer.setData('card_id', target.id);
  }

  dragOver = event =>{
    event.stopPropagation();
  }
  drop = event => {
    event.preventDefault();
    const card_id = event.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'block';

    event.target.insertBefore(card, event.target.nexSibling);
  }

  dragOverB = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <main className="flexbox">
            <Board 
              id="board-1" 
              className="board"
              dragOverB={this.dragOverB}
              drop={this.drop}
            >
              <Card 
                id="card-1" 
                className="card" 
                draggable="true"
                dragOver={this.dragOver}
                dragStart={this.dragStart}
              >
                  <p>Card One</p>
              </Card>
              <Card 
                id="card-2" 
                className="card" 
                draggable="true"
                dragOver={this.dragOver}
                dragStart={this.dragStart}
              >
                  <p>Card Two</p>
              </Card>
            </Board>
            <Board 
              id="board-2" 
              className="board"
              dragOverB={this.dragOverB}
              drop={this.drop}
            >
            <Card 
                id="card-3" 
                className="card" 
                draggable="true"
                dragOver={this.dragOver}
                dragStart={this.dragStart}
              >
                  <p>Card Three</p>
              </Card>
            </Board>
        </main>
      </div>
    );
  }
}

export default App;
