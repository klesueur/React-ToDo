import React from 'react';
import { IoMdTrash, IoMdCheckmark } from 'react-icons/io';


const Todo = (props) => {
    
    //Events
    const deleteHandler = () => {
        props.setTodos(props.todos.filter(e => e.id !== props.todo.id))
    }

    const completeHandler = () => {
        props.setTodos(props.todos.map(item => item.id === props.todo.id ?
            {...item, completed: !item.completed} : item))
    }

    return (
        <div className="todo-view">
            <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`} >
                {props.text}
            </li>
            <div className="btn-group">
                <button className="complete-btn" type="button"
                    onClick={completeHandler} >
                    <IoMdCheckmark size={20} />
                </button>
                <button className="trash-btn" type="button"
                    onClick={deleteHandler}>
                    <IoMdTrash size={20} />
                </button>
            </div>
        </div>
    )
}

export default Todo;