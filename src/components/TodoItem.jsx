import React from 'react'
import "../styles/TodoItem.css"

export default function TodoItem(props) {

  return (
    <li className={props.completed ? "todo-item completed" : "todo-item"}>
      <img 
      src={props.completed ? "./check-icon.svg" : "./check-icon-dark.svg"} 
      className="todo-icon" />
      <p className="todo-text">{props.text}</p>
      <img 
        className="todo-icon delete"
        src="./garbage-bin.svg"
        onClick={() => props.handle_delete(props.id)}
      />
    </li>
  )
}
