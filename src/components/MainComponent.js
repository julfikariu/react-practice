import React, { Component } from 'react';
import booklist from '../assets/booklist';
import Booklist from './lists/Booklist';
import NewBook from './representational/NewBook'
import { Routes, Route, NavLink } from 'react-router-dom';
import BookDetail from './representational/BookDetail';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: booklist,
            selectedBook: null
        };
    }


    selectBookHandeler = bookId => {
        let selectNewBook = this.state.books.filter(item => item.id === bookId)[0];
        this.setState({
            selectedBook: selectNewBook
        });

    }


    render() {

        const books = this.state.books;

        let boksList = <Booklist books={books} selectBookHandeler={this.selectBookHandeler} />

        return (
            <div className="App">
                <nav className="nav-bar">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={boksList} />
                    <Route path="/new-book" element={<NewBook />} />
                    <Route path="/book/:id" element={<BookDetail book={this.state.selectedBook} />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>



            </div>
        );
    };
}


export default MainComponent;