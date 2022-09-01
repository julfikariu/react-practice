import React, { Component } from 'react';
import booklist from '../assets/booklist';
import Booklist from './lists/Booklist';

class MainComponent extends Component {
    state = {
        books: booklist,
        showbooks: true
    };

    deleteBook = index => {
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };

    toggleBooks = () => {
        this.setState({
            showbooks: !this.state.showbooks
        });
    }

    render() {

        const books = this.state.books;

        const style = {
            border: "1px solid green",
            padding: "5px 30px",
            borderRadius: "6px",
            color: "violet",
            backgroundColor: "black",
            margin: "10px"
        };

        let boksList = null;
        if (this.state.showbooks) {
            boksList = <Booklist books={books} deleteBook={this.deleteBook} />
        }





        return (
            <div className="App">

                <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button>
                {boksList}

            </div>
        );
    };
}


export default MainComponent;