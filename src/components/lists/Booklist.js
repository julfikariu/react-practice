import React, { Component } from 'react';
import Book from '../representational/Book';

class Booklist extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            this.props.books.map((bk, index) => {
                return (
                    <Book
                        bookName={bk.bname}
                        writterName={bk.wname}
                        delete={() => this.props.deleteBook(index)}
                        key={bk.id}
                    />
                );
            })
        );
    }
}

export default Booklist;