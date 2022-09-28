import { useEffect, useState } from 'react'
import './App.css'
import { nanoid } from "nanoid"
import TodoCounter from "./components/TodoCounter"
import TodoSearch from "./components/TodoSearch"
import TodoList from "./components/TodoList"
import CreateTodoButton from "./components/CreateTodoButton"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([
    { text: 'Cortar cebolla', completed: true},
    { text: 'Tomar el curso de intro a React', completed: false},
    { text: 'Llorar con la llorona', completed: false}
  ])
  const [todosCount, setTodosCount] = useState(0)
  
  useEffect(() => {
    return setTodosCount(todos.length)
  }, [todos])

  function handleNewTodo(newTodo) {
    setTodos(prevTodos => ([
      ...prevTodos, newTodo
    ]))
  }

  function handleDelete() {
    console.log("borrando")
  }

  return (
    <div className="App">
      <h1 className="title">My Next Task</h1>
      <TodoCounter 
        todosCount={todosCount}/>
      <TodoSearch />
      <TodoList> 
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            delete={handleDelete}/>
        ))}
      </TodoList>
      <CreateTodoButton 
      handleNewTodo={() => handleNewTodo({text: "Nuevo todo", completed: true})} />
    </div>
  )
}

export default App
