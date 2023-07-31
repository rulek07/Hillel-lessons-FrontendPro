import React from "react";
import TodoItem from "./todoItem";

function TodoList({ todos, todoDelButton }) {
    return (
        <ul>
            {todos.map((todo, index) => (<TodoItem todo={todo} index={index} key={todo.id} todoDelButton={todoDelButton} />))}
        </ul>
    );
}

export default TodoList;