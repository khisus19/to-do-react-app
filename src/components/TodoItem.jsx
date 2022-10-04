import React from 'react'
import "../styles/TodoItem.css"
import { IoTrashBin, IoCheckmarkCircleSharp, IoEllipseOutline } from "react-icons/io5"

export default function TodoItem(props) {

  return (
    <li className={props.completed ? "todo-item completed" : "todo-item"}
      onClick={() => props.handle_complete(props.id)}>
      {props.completed ? 
        <IoCheckmarkCircleSharp 
          className="todo-icon checked" /> :
        <IoEllipseOutline
          className="todo-icon" />
      }
      <p className="todo-text">{props.text}</p>
      <IoTrashBin 
        className="todo-icon delete"
        onClick={() => props.handle_delete(props.id)} />
    </li>
  )
}
