import React from 'react'
import "../styles/TodoItem.css"
import HoverImage from "react-hover-image";
import { IoTrashBin, IoCheckmarkCircleSharp } from "react-icons/io5"

export default function TodoItem(props) {

  return (
    <li className={props.completed ? "todo-item completed" : "todo-item"}
      onClick={() => props.handle_complete(props.id)}>
      <IoCheckmarkCircleSharp 
        className={props.completed ? "todo-icon checked" : "todo-icon"} />
      <p className="todo-text">{props.text}</p>
      <IoTrashBin 
        className="todo-icon delete"
        onClick={() => props.handle_delete(props.id)} />
    </li>
  )
}
