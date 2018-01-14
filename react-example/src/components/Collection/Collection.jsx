import React, { Component } from 'react';
import Header from './../Header/Header'
import CollectionSingleBook from './CollectionSingleBook';
import BookData from './../../data/books.json';

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      books: BookData
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Your Collection</h1>
        {/* Iterates through data (books) */}
        {this.state.books.map((book) => (
          <div>
            <CollectionSingleBook key={book.id} book={book} />
          </div>
        ))}
      </div>
    );
  }
}

export default Collection;
