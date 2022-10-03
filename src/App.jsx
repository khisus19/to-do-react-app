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
    { text: 'Cortar cebolla', completed: true, id: "1"},
    { text: 'Tomar el curso de intro a React', completed: false, id: "2"},
    { text: 'Llorar con la llorona', completed: true, id: "3"}
  ])
  const [todosCount, setTodosCount] = useState(0)
  const [searchInputValue, setSearchInputValue] = useState("")

  const filteredTodos = todos.filter(item => {
    let regexp = RegExp(searchInputValue, 'ig')
    return regexp.test(item.text)
  })

  const completedTodos = filteredTodos.filter(item => item.completed).length

  
  useEffect(() => {
    return setTodosCount(filteredTodos.length)
  }, [searchInputValue, todos])

  function handleNewTodo(newTodo) {
    setTodos(prevTodos => ([
      ...prevTodos, newTodo
    ]))
  }

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

  

  return (
    <div className="App">
      <h1 className="title">My Next Task</h1>
      <TodoCounter 
        todosCount={todosCount}
        completed_num={completedTodos}/>

      <TodoSearch 
        search={handleSearch}/>

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

      <CreateTodoButton 
        handleNewTodo={() => handleNewTodo({text: "Nuevo todo", completed: false, id: nanoid()})} />
    </div>
  )
}

export default App
