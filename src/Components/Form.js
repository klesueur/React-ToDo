import React from 'react';
import { IoMdAdd } from 'react-icons/io';


const Form = (props) => {

        const handleOnChange = (e) => {
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
        <div className="form">
            <input
                value={props.inputText}
                type="text"
                onChange={handleOnChange} />
            <button className="add-btn"
                type="submit"
                onClick={handleSubmit}
            >
                <IoMdAdd />
            </button>
        </div>
    )
}

export default Form;