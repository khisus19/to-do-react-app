import React from 'react'
import "../styles/TodoSearch.css"

export default function TodoSearch(props) {


  return (
    <input placeholder="Cebolla" onChange={props.search}/>
  )
}
