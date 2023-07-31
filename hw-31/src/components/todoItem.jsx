import React, { useState } from "react";
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

function TodoItem({ todo, index, todoDelButton }) {
    const [isChecked, setIsChecked] = useState(todo.checked);
    const handleClick = () => {!todo.checked ? (todo.checked = true) : (todo.checked = false);};

    return (
        <li className="todos_wrapper" style={isChecked ? doneColor.checked : doneColor.basic}>
            <div className="todo_item">
                <input
                    type="checkbox"
                    onClick={handleClick}
                    id={`todo_${todo.id}`}
                    defaultChecked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
                <p>{index + 1}.</p>
                <p>{todo.title}.</p>
            </div>
            <TodoDelButton todo={todo} todoDelButton={todoDelButton} />
        </li>
    );
}

export default TodoItem;