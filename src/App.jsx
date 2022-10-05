import { useEffect, useState } from 'react'
import './App.css'
import TodoCounter from "./components/TodoCounter"
import TodoSearch from "./components/TodoSearch"
import TodoList from "./components/TodoList"
import CreateTodoButton from "./components/CreateTodoButton"
import TodoItem from "./components/TodoItem"
import Modal from "./components/Modal"
import ModalContent from "./components/ModalContent"

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("TODOS_V1")) || [])
  const [todosCount, setTodosCount] = useState(0)
  const [searchInputValue, setSearchInputValue] = useState("")
  const [isModalOn, setIsModalOn] = useState(false)

  const filteredTodos = todos.filter(item => {
    let regexp = RegExp(searchInputValue, 'ig')
    return regexp.test(item.text)
  })

  const completedTodos = filteredTodos.filter(item => item.completed).length

  useEffect(() => {
    localStorage.setItem("TODOS_V1", JSON.stringify(todos))
  }, [todos])
  
  useEffect(() => {
    return setTodosCount(filteredTodos.length)
  }, [searchInputValue, todos])

  function handleDelete(id) {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== id)
    })
  }

  function handleSearch(event) {
    const input = event.target.value
    setSearchInputValue(input)
  }

  function handleComplete(id) {
    setTodos(prevTodos => {
      return prevTodos.map(item => item.id === id ? {...item, completed: !item.completed} : item)
    })
  }

  function toggleModal() {
    setIsModalOn(prev => !prev)
  }

  
  return (
    <div className="App">
      <h1 className="title">My Next Task</h1>
      <img src="./check-list-design.webp" 
        className="checklist" />

      <CreateTodoButton 
        handleNewTodo={toggleModal} />

      <TodoCounter 
        todosCount={todosCount}
        completed_num={completedTodos} 
        todos={todos} />

      {todos.length !== 0 && <TodoSearch search={handleSearch} />}

      <TodoList> 
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            handle_delete={handleDelete}
            handle_complete={handleComplete} />
        ))}
      </TodoList>

      {isModalOn && 
        <Modal>
          <ModalContent 
          cancel_modal={toggleModal} 
          todos={todos}
          setTodos={setTodos}
          />
        </Modal>}
    </div>
  )
}

export default App
