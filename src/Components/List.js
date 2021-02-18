import React from 'react';
import Todo from './Todo';


const List = (props) => {


    return(
        <div className='todolist-view'>
            <ul>
                {props.todos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text}
                        todo={todo}
                        todos={props.todos}
                        setTodos={props.setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}


export default List;