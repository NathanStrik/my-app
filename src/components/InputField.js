import React, { Component } from 'react';

class InputField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTodoItem: '',
        }
        // this.props = this.handleClick.bind(this);
    }

    changeTodoItem = (event) => this.setState({ [event.target.name]: event.target.value });

    submitTodoItem = (event) => {
        // Prevents submitting to page
        event.preventDefault();
        // Call a props method (to be passed up the hierarchy chain)
        console.log('InputField ziet: ' + this.state.newTodoItem);
        this.props.addTodo(this.state.newTodoItem);
        // Clear state of InputField
        this.setState({ newTodoItem: '' });
    }

    render() {
        return (
            <form onSubmit={this.submitTodoItem}>
                <input
                    ref="item"
                    type="text"
                    placeholder="New thing to do today..."
                    name="newTodoItem"
                    value={this.state.newTodoItem}
                    onChange={this.changeTodoItem}
                />
                <input 
                    type="submit"
                    value="Add"
                    className="btn btn-cta"
                />
            </form>
        );
    }
}

export default InputField;
