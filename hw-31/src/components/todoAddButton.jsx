import React from "react";
import './todo.css'

const TodoAddButton = ({ todoAddButton, inputValue, setInputValue }) => {
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="add_wrapper">
            <input className="input_text" type="text" value={inputValue} onChange={handleChange}/>
            <button className="add_button" onClick={todoAddButton}>Add a task</button>
        </div>
    );
};

export default TodoAddButton;