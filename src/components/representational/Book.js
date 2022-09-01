import React from 'react';
import '../../styles/Book.css';

let Book = props => {
    return (
        <div className="book">
            <h3 onClick={props.delete}>Book : {props.bookName} </h3>
            <h4>Writer : {props.writterName}</h4>
        </div>
    );
}


export default Book;