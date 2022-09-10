import React, { Component, createRef } from 'react';

class NewBook extends Component {

    constructor(props) {
        super(props);

        this.bookName = createRef();
        this.writerName = createRef();
        this.description = createRef();

    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(this.bookName.current.value);
        console.log(this.writerName.current.value);
        console.log(this.description.current.value);

    }

    render() {
        return (
            <div>
                <h1> NewBook Entry</h1>

                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Book Name</label>
                    <br />
                    <input type="text" name="bookName" ref={this.bookName} />
                    <br />
                    <label>Writer Name</label>
                    <br />
                    <input type="text" name="writerName" ref={this.writerName} />
                    <br />
                    <label>Description</label>
                    <br />
                    <textarea name="description" ref={this.description}></textarea>
                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default NewBook;