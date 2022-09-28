import { useState } from 'react'
import './App.css'
import TodoCounter from "./components/TodoCounter"
import TodoSearch from "./components/TodoSearch"
import TodoList from "./components/TodoList"
import CreateTodoButton from "./components/CreateTodoButton"
import TodoItem from "./components/TodoItem"

function App() {
  const [count, setCount] = useState(0)

  const todos = [
    { text: 'Cortar cebolla', completed: true},
    { text: 'Tomar el curso de intro a React', completed: false},
    { text: 'Llorar con la llorona', completed: false}
  ]

  return (
    <div className="App">
      <h1 className="title">My Next Task</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList> 
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  )
}

export default App
