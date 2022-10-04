import React from 'react'
import "../styles/TodoSearch.css"

export default function TodoSearch(props) {
  return (
    <input placeholder="Search" onChange={props.search}/>
  )
}