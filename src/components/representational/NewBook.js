import React, { Component } from 'react';

class NewBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writerName: "",
            description: ""
        }

        this.haldelInputChange = this.haldelInputChange.bind(this);
    }

    haldelInputChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

    }

    render() {
        return (
            <div>
                <h1> NewBook Entry</h1>

                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Book Name</label>
                    <br />
                    <input type="text" name="bookName" value={this.state.bookName} onChange={this.haldelInputChange} />
                    <br />
                    <label>Writer Name</label>
                    <br />
                    <input type="text" name="writerName" value={this.state.writerName} onChange={this.haldelInputChange} />
                    <br />
                    <label>Description</label>
                    <br />
                    <textarea name="description" onChange={this.haldelInputChange}>{this.state.description}</textarea>
                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default NewBook;