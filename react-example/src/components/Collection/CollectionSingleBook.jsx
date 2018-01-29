import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

class CollectionSingleBook extends Component {
  render() {
    return (
      <div>
        <Link to={{pathname: `/collection/${this.props.book.id}`, state: { singleBook: this.props.book }}}><img src={require("./../../assets/" + this.props.book.cover)}/></Link>
      </div>
    );
  }
}

export default CollectionSingleBook;
