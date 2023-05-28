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
                <input id={"label"} type="text"/>
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
    );
};

export default Form;