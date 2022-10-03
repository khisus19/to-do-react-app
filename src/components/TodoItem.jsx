import React from 'react'
import "../styles/TodoItem.css"
import HoverImage from "react-hover-image";

export default function TodoItem(props) {

  return (
    <li className={props.completed ? "todo-item completed" : "todo-item"}
      onClick={() => props.handle_complete(props.id)}>
      <img 
      src={props.completed ? "./check-icon.svg" : "./check-icon-dark.svg"} 
      className="todo-icon" />
      <p className="todo-text">{props.text}</p>
      <HoverImage 
        className="todo-icon delete"
        src="./garbage-bin.svg"
        hoverSrc="./garbage-bin-red.svg"
        onClick={() => props.handle_delete(props.id)} />
    </li>
  )
}
