import React from 'react'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Route} from 'react-router-dom'
import Search from './Search'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook = (book, shelfName) => {
    BooksAPI.update(book, shelfName).then(() => {
      const { books } = this.state;
      book.shelf = shelfName;
      let newbooks = books.filter((b) => b.id !== book.id)
      newbooks.push(book);
      this.setState({ books: newbooks })
    });
  }

  render() {
    let showingBooks
    showingBooks = this.state.books

    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/search" render={() => (<Search onShelfChange={this.updateBook}/>)} />
          <Route exact path="/" render={() => (<ListBooks books={showingBooks} onShelfChange={this.updateBook} />)} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
