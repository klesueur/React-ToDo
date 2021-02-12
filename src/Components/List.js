import React from 'react';


const List = (props) => {


    return(
        <div>
            {props.inputText.map(prop => (
                <Todo />
            ))}
        </div>
    )
}


export default List;