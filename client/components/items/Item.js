import React from 'react';

class Item extends React.Component {
  state = { edit: false };

  render() {
    return (
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{name}</span>
          </div>
        </div>
      </div>
    )
  }

}
