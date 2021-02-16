import React from 'react';
import Todo from './Todo';


const List = (props) => {


    return(
        <div>
            <ul>
                {props.todoList.map(todo => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    )
}


export default List;