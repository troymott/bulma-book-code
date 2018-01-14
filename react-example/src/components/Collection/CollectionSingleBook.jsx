import React, { Component } from 'react';

class CollectionSingleBook extends Component {
  render() {
    return (
      <div>
        <p>{this.props.book.label}</p>
      </div>
    );
  }
}

export default CollectionSingleBook;
