import React, { Component } from 'react';
import Header from './../Header/Header'
import CollectionSingleBook from './CollectionSingleBook';
import BookData from './../../data/books.json';
import styles from './styles/Collection.css';

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
        <div className="container has-gutter-top">
          <h1 className="title is-2">Your Collection</h1>
          {/* Iterates through data (books) */}
          <div className="columns is-multiline">
            {this.state.books.map((book) => (
              <div className="column is-3">
                <CollectionSingleBook key={book.id} book={book} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
