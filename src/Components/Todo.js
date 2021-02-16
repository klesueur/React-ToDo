import React from 'react';


const Todo = (text) => {
    console.log('text prop in Todo', text)

    return (
        <div className="todo">
            <li className="todo-item">
                {text}
            </li>
            <button className="complete-btn">Check</button>
            <button className="trash-btn">Trash</button>
        </div>
    )
}

export default Todo;