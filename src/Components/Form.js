import React from 'react';


const Form = (props) => {

        const handleOnChange = (e) => {
            console.log(e.target.value);
            props.setInputText(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            props.setInputText([
                ...todoList, {
                    text: props.inputText,
                    completed: false,
                    id: 
                    }
                ]);
        }

    return(
        <div>
            <input type="text" onChange={handleOnChange} />
            <button type="submit" onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Form;