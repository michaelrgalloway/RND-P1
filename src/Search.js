import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'


class Search extends Component {

    state = { books: [] }

    updateBooks = (e) => {
        let term = e.target.value
        this.setState({ books: [] });
        if (term) {
            BooksAPI.search(term, 20).then((results) => {
                
                this.setState({ books: results });
            })
        }
        
    }


    render() {
        const { onShelfChange } = this.props;
        const bookResults = this.state.books;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.updateBooks} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            <BookShelf books={bookResults} shelfName={"Search Results"} onShelfChange={onShelfChange} />
                        }
                    </ol>
                </div>
            </div>
        );
    }
}
Search.propTypes = {
    onShelfChange: PropTypes.func.isRequired
};

export default Search