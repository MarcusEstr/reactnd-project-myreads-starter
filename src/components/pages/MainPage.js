import React from 'react'
import * as BooksAPI from '../../BooksAPI'
import { Link } from 'react-router-dom'
import Shelf from '../Shelf';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(resp => {
      console.log(resp);
      this.setState({ books: resp});
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
          <Shelf name="Want to Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
          <Shelf name="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;