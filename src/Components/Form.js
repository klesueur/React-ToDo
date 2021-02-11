import React from 'react';


const Form = (props) => {

        const handleOnChange = (e) => {
            console.log(e.target.value);
            props.setInputText(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            props.setTodoList([
                ...props.todoList, {
                    text: props.inputText,
                    completed: false,
                    id: Math.random() * 1000
                    }
                ]);
            props.setInputText('');
        }

    return(
        <div>
            <input value={props.inputText} type="text" onChange={handleOnChange} />
            <button type="submit" onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Form;