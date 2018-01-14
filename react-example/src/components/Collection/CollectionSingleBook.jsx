import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CollectionSingleBook extends Component {
  render() {
    return (
      <div>
        <img src={require("./../../assets/" + this.props.book.cover)}/>
      </div>
    );
  }
}

export default CollectionSingleBook;
