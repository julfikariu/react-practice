import React, { Component } from 'react';
import Book from '../representational/Book';
import { Link } from 'react-router-dom';

class Booklist extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            this.props.books.map((bk, index) => {
                return (
                    <Link to={"/book/" + bk.id} key={bk.id} style={{ textDecoration: "none" }}>
                        <Book
                            bookName={bk.bname}
                            writterName={bk.wname}
                            selectBookHandeler={() => this.props.selectBookHandeler(bk.id)}
                        />
                    </Link>
                );
            })
        );
    }
}

export default Booklist;