import "../styles/ModalContent.css"
import { useState } from "react"
import { nanoid } from "nanoid"

export default function ModalContent({ cancel_modal, todos, setTodos}) {
  const [newTodo, setNewTodo] = useState({text: "", complete: false, id: nanoid()})

  function createNewTodo(newTodo) {
    setTodos(prevTodos => ([
      ...prevTodos, newTodo
    ]))
  }

  function handleNewTodoInput(event) {
    const { name, value } = event.target
    setNewTodo(prev => ({
      ...prev, 
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    createNewTodo(newTodo)
    cancel_modal()
  }

  return(
    <form className="modal-content"
      onSubmit={handleSubmit}>
      <h2 className="modal-title">Create a new ToDo</h2>
      <textarea
        id="textarea"
        placeholder="Write your next task"
        name="text"
        value={newTodo.text}
        className="textarea" 
        onChange={handleNewTodoInput} />
      <div className="modal-btn--container">
        <button 
          className="modal-btn cancel"
          onClick={cancel_modal}
          type="button">Cancel</button>
        <button 
          className={newTodo.text !== "" ? "modal-btn create" : "modal-btn inactive"}
          disabled={newTodo.text === ""}
          >Create</button>
      </div>
    </form>
  )
}