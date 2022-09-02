import React from 'react';


const BookDetail = props => {
    if (props.book === null) return <div></div>;
    return (
        <div>
            <div style={{
                width: "600px",
                margin: "0 auto",
                border: "2px solid green",
                padding: "18px"
            }}>

                <h1>{props.book.bname}</h1>
                <h3>{props.book.wname}</h3>
                <p>{props.book.description}</p>

            </div>
        </div>
    );
}

export default BookDetail;