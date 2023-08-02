import React from "react";
import TodoDelButton from "./todoDelButton";
import './todo.css'

const doneColor = {
    basic: {
        border: "3px solid rgba(36, 163, 255, 0.5)",
        background: "white",
    },
    checked: {
        border: "3px solid #22f31b80",
        background: "#ebfce9",
    }
};

function TodoItem({ checked, title, id, index, todoDelButton, onChecked }) {
    return (
        <li className="todos_wrapper" style={checked ? doneColor.checked : doneColor.basic}>
            <div className="todo_item">
                <input
                    type="checkbox"
                    id={`todo_${id}`}
                    checked={checked}
                    onChange={onChecked}
                />
                <p>{index + 1}.</p>
                <p>{title}.</p>
            </div>
            <TodoDelButton todoId={id} todoDelButton={todoDelButton} />
        </li>
    );
}

export default TodoItem;