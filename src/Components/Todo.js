import React from 'react';


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
                <i className="fas fa-check">Complete</i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
            <i className="fas fa-trash">Remove</i>
            </button>
        </div>
    )
}

export default Todo;