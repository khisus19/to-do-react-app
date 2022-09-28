import React from 'react'

export default function CreateTodoButton(props) {
  return (
    <button 
    className="btn"
    onClick={props.handleNewTodo}
    >+</button>
  )
}
