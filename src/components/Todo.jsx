import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button
                    className={`complete ${todo.isCompleted ? 'completed' : ''}`}
                    onClick={() => completeTodo(todo.id)}
                >
                    {todo.isCompleted ? 'Desmarcar' : 'Completar'}
                </button>
                <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
    )
}

export default Todo;
