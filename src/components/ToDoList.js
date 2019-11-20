import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js';

class ToDoList extends Component {

    // Constructor method
    constructor(props) {
        super(props);
        this.state = {
            toDoItems: [ 
            {id: 1, title:'React nog beter leren'}, 
            {id: 2, title: 'Pizza\'s naar binnen harken'} 
            ]
        };
    }

    // Render method
    render() {
        return (
            <div className="todo-list">
                <h1>Things to do today:</h1>
                <ul>
                    {this.state.toDoItems.map( 
                        todo => (
                            <ToDoItem title={todo.title}/>
                        ) 
                    )}
                </ul>
            </div>
        );
    }
}

export default ToDoList;