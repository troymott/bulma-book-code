import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import styles from './styles/Collection.css';

class CollectionSingleBookDetail extends Component {
  render() {
    const singleBook = this.props.location.state.singleBook;

    return (
      <div>
        <Header />
        <div className="container has-gutter-top-bottom">
          <div className="columns">
            <div className="column">
              <h1 className="title is-2">{singleBook.name}</h1>
              <p>By: {singleBook.author}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <img src={require("./../../assets/" + singleBook.cover)}/>
            </div>
            <div className="column">
              <p>{singleBook.details}</p>

              <div className="columns has-gutter-top">
                <div className="column">
                  <button className="button is-primary is-large is-fullwidth">Buy Book</button>
                </div>
                <div className="column">
                  <button className="button is-secondary is-large is-fullwidth">Share Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CollectionSingleBookDetail;
