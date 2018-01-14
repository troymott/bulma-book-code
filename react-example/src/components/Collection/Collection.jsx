import React, { Component } from 'react';
import Header from './../Header/Header'
import CollectionSingleBook from './CollectionSingleBook';

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          label: 'List item 1'
        },
        {
          id: 2,
          label: 'List item 2'
        },
        {
          id: 3,
          label: 'List item 3'
        },
        {
          id: 4,
          label: 'List item 4'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Your Collection</h1>
        <CollectionSingleBook />
        <ul>
          {this.state.items.map((item) => (
              <li key={item.id}>
                  {item.label}
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Collection;
