import React, { Component } from 'react';
import booklist from '../assets/booklist';
import Booklist from './lists/Booklist';
import NewBook from './representational/NewBook'
import { Routes, Route, NavLink } from 'react-router-dom';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: booklist,
        };
    }


    deleteBook = index => {
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };



    render() {

        const books = this.state.books;

        let boksList = <Booklist books={books} deleteBook={this.deleteBook} />



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
                </Routes>


            </div>
        );
    };
}


export default MainComponent;