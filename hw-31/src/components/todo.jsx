import React, { useState } from "react";
import "./todo.css"
import "./reset.css"
import TodoList from "./todoList";
import Button from "./todoAddButton";

function Todo() {
    const initialTodos = [
        {
            id: 1,
            title: 'Wake up at 6:00',
            checked: false,
        },
        {
            id: 2,
            title: 'Have breakfast at 6:30',
            checked: false,
        }
    ];
    const [data, setData] = useState(initialTodos);
    const [inputValue, setInputValue] = useState("");

    const todoAddButton = () => {
        if (inputValue.trim() === "") {
            return;
        };

        const newTodo = {
            id: new Date().toISOString(),
            checked: false,
            title: inputValue,
        };

    setData([...data, newTodo]);
    setInputValue("");
    };

    const todoDelButton = (deletedId) => {
        const updatedData = data.filter((item) => item.id !== deletedId);
        setData(updatedData);
    };

    return (
        <div className="todos_container">
            <div>
                <h1>Your business for the day.</h1>
                <TodoList todos={data} todoDelButton={todoDelButton} />
            </div>
            <div>
                <Button 
                    className="add_button"
                    todoAddButton={todoAddButton}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </div>
        </div>
    );
}

export default Todo;