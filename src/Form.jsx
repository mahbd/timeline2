import React from 'react';

const Form = ({onSubmit}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = document.getElementById("label").value;
        onSubmit(value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Text<input id={"label"} type="text"/></label>
                <br />
                <lebel>Index<input id={"index"} type="number"/></lebel>
                <br />
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
    );
};

export default Form;