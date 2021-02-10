import React from 'react';


const Form = (props) => {

        const handleOnChange = (e) => {
            console.log(e.target.value)
        }

    return(
        <div>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default Form;