import React from 'react';
import Todo from './Todo';


const List = (props) => {


    return(
        <div>
            <ul>
                {props.todoList.map(todo => (
                    <Todo 
                        key={props.todoList.id} 
                        text={props.todoList.text} 
                    />
                ))}
            </ul>
        </div>
    )
}


export default List;