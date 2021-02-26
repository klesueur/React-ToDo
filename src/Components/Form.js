import React from 'react';
import { IoMdAdd } from 'react-icons/io';


const Form = (props) => {

        const handleOnChange = (e) => {
            props.setInputText(e.target.value)
        };

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
        };

        const statusHandler = (e) => {
            props.setStatus(e.target.value)
        };

    return(
        // onSubmit within "form" - as an onClick with passed function,
        // works with Enter key
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-input-group">
                <input
                    className="form-input"
                    value={props.inputText}
                    type="text"
                    onChange={handleOnChange} 
                    placeholder="What's on your plate today?" />
                <button className="add-btn" type="submit" disabled={props.inputText.length<1} >
                    <IoMdAdd size={22} />
                </button>
            </div>
            <div className="filter-select">
                <select className="filter-todos" name="todos"
                onChange={statusHandler}>
                    <option value="all"> All </option>
                    <option value="completed"> Completed </option>
                    <option value="uncompleted"> Uncompleted </option>
                </select>
            </div>
        </form>
    )
}

export default Form;