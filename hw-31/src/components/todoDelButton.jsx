import React from "react";

function TodoDelButton({ todo, todoDelButton }) {
    const handleDeleteClick = () => {
        todoDelButton(todo.id);
    };

    return (
        <>
            <button className="del_button" onClick={handleDeleteClick}>Del</button>
        </>
    );
}

export default TodoDelButton;