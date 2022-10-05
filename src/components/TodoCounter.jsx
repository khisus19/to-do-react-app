import React from 'react'
import "../styles/TodoCounter.css"

export default function TodoCounter(props) {
  let message = (props.todos.length === 0) ?
    "Create your first ToDo" :
    `You have completed ${props.completed_num} out of ${props.todosCount}`
  return (
    <h2 className="todo-counter">{message}</h2>
  )
}
