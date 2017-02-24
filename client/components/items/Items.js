import React from 'react';
import List from './Item';

class Items extends React.Component {
  state = { items: [] };

  componentDidMount() {

  }

  addItem = (name) => {

  }

  updateItem = (item) => {

  }

  deleteBoard = (id) => {

  }

  render() {
    let items = this.state.boards.map( item => {
      return (
        <Board
          key={item._id}
          deleteBoard={this.deleteItem}
          updateBoard={this.updateItem}
          {...item}
        />
      )
    });

    return (
      <div className="row">
        { items }
      </div>
    )
  }
}
