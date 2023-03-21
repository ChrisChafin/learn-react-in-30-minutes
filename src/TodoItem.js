import React from 'react'

export default function TodoItem({ todo, toggleCheck }) {

  function handleTodoClick() {
    toggleCheck(todo.id)
  }  

  return (
    <div className='to-do-item'>
        <label>
            <input className='checkbox' type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            <span class="checkmark"></span>
            <div className='to-do-text'>{todo.name}</div>
        </label>
    </div>
  )
}