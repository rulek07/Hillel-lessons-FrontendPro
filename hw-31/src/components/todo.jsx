import React, { useState } from "react";
import "./todo.css"
import "./reset.css"
import TodoItem from "./todoItem";
import Button from "./todoAddButton";

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

function Todo() {
    const [todos, setTodos] = useState(initialTodos);
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

        setTodos([...todos, newTodo]);
        setInputValue("");
    };

    const onChecked = (todoId) => {
        setTodos(prevValue => {
            return [...prevValue].map(item => {
                if (item.id === todoId) {
                    return {
                        ...item,
                        checked: !item.checked
                    }
                }
                return item;
            })
        })
    }

    const todoDelButton = (deletedId) => {
        const updatedData = todos.filter((item) => item.id !== deletedId);
        setTodos(updatedData);
    };

    return (
        <div className="todos_container">
            <div>
                <h1>Your business for the day.</h1>
                <ul>
                    {todos.map((todo, index) => (<TodoItem key={todo.id} index={index} onChecked={() => onChecked(todo.id)} todoDelButton={todoDelButton} {...todo} />))}
                </ul>
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