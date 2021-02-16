import React from 'react';


const Todo = (props) => {
    

    return (
        <div className="todo">
            <li className="todo-item">
                {props.text}
            </li>
            <button className="complete-btn">Check</button>
            <button className="trash-btn">Trash</button>
        </div>
    )
}

export default Todo;