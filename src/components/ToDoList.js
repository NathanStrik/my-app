import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js';
import InputField from './InputField.js';

class ToDoList extends Component {

    state = {
        toDoItems: [ 
        {id: 1, title: 'React leren'}
        ]
    };

    // Add Todo item
    addTodo = (newTodoItem) => {
        if (newTodoItem.trim() !== '') {
            console.log('Extra test');
            const itemToAdd = {
                id: 4,
                title: newTodoItem
            };
            this.setState({ toDoItems: [...this.state.toDoItems, itemToAdd] });
        }
    }
    
    // Make a new Id number for Todo Item
    getId = () => {
        return this.state.toDoItems.length + 1;
    }

    // Render method
    render() {
        return (
            <div className="todo-list">
                <h1>Things to do today:</h1>
                <ul>
                    {this.state.toDoItems.map( 
                        todo => (
                            <ToDoItem key={todo.id} title={todo.title}/>
                        ) 
                    )}
                </ul>
                <InputField addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default ToDoList;
