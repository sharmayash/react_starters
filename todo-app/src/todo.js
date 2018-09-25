import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span >{todo.content}</span>
                    <span className="badge red white-text hoverable" onClick={() => {deleteTodo(todo.id)}}>Delete task</span>
                </div>
            )
        })
    ) : (
            <p className="center">No task Left to do.</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;