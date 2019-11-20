import React from 'react';

function ToDoItem({title}) {
    console.log(title);
    return <li className="list-item"> {title} </li>;
}

export default ToDoItem;