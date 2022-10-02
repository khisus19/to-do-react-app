import React from 'react'
import "../styles/TodoCounter.css"

export default function TodoCounter(props) {
  
  
  return (
    <h2 className="todo-counter">You have completed {props.completed_num} out of {props.todosCount}</h2>
  )
}
