import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const ListBooks = (props) => {
    const { books, onShelfChange } = props;

    const shelfs = ['Currently Reading', 'Want to Read', 'Read'];

    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
            return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelfs.map((shelf) => (
                            <BookShelf key={shelf} books={books.filter(book => book.shelf === camelize(shelf))} shelfName={shelf} onShelfChange={onShelfChange} />
                        ))
                    }
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
};
export default ListBooks