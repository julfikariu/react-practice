import React from 'react';
import '../../styles/Book.css';

let Book = props => {

    return (
        <div className="book" onClick={props.selectBookHandeler}>
            <h3 >Book : {props.bookName} </h3>
            <h4>Writer : {props.writterName}</h4>
        </div>
    );
}


export default Book;