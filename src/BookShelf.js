import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = (props) => {
    const { books, shelfName, onShelfChange } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} onShelfChange={onShelfChange} />
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
};
export default BookShelf