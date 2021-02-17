import React from 'react';
import { IoMdTrash, IoMdCheckmark } from 'react-icons/io';


const Todo = (props) => {
    console.log('what is this text', props.text)
    //Events
    const deleteHandler = () => {
        props.setTodos(props.todos.filter(e => e.id !== props.todo.id))
    }

    // const completeHandler = () => {
    //     props.setTodos(props.todos.map(item => {
    //         if (item.id === props.todo.id) {
    //             return {
    //                 ...item, completed: !item.completed
    //             }
    //             return item
    //         }
            
    //     }))
    // }

    return (
        <div className="todo">
            <li className="todo-item">
                {props.text}
            </li>
            <button className="complete-btn" >
                <IoMdCheckmark />
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <IoMdTrash />
            </button>
        </div>
    )
}

export default Todo;