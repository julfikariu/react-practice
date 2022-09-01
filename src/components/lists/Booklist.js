import React from 'react';
import Book from '../representational/Book';

const Booklist = (props) => {

    return (
        props.books.map((bk, index) => {
            return (
                <Book
                    bookName={bk.bname}
                    writterName={bk.wname}
                    delete={() => props.deleteBook(index)}
                    key={bk.id}
                />
            );
        })
    );

}

export default Booklist;