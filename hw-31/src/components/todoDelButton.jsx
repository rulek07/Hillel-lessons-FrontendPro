import React from "react";

function TodoDelButton({ todoId, todoDelButton }) {
    const handleDeleteClick = () => {
        todoDelButton(todoId);
    };

    return <button className="del_button" onClick={handleDeleteClick}>Del</button>;
}

export default TodoDelButton;