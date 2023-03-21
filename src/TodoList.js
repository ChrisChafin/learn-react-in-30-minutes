import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, toggleCheck }) {
  return (
    todos.map(todo => {
            return <TodoItem key={todo.id} toggleCheck={toggleCheck} todo={todo} />
    })
  )
}
