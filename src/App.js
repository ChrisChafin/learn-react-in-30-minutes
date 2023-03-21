import logo from './react-logo.svg';
import './App.css';
import React, { StrictMode, useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // state
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // state management on change
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(
      LOCAL_STORAGE_KEY))
    if (storedTodos) {setTodos(PrevTodos => [...PrevTodos, ...storedTodos])}
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  //toggle checked true/false
  function toggleCheck(id) {
    const newList = [...todos];
    const todo = newList.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newList)
  }


  // add Tdod Item
  function addTodoItem(e) {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(PrevTodos => {
      return [...PrevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  //clear check items
  function clearCheckedItems() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  // return
  return (
    <StrictMode>
      <div className="App">
        <header className="App-header">
          <h2 className="title">Your To-do List</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Todo-container">
          
          {/* input section */}
          
          <div className="Input-container">
            <input ref={todoNameRef} type='text' placeholder='enter task' />
            <button onClick={addTodoItem}>Add To-do Item</button>
          </div>

          {/* list section */}

          <div className='List-container'>
            <span className='items-left'>{todos.filter(todo => !todo.complete).length} items remaining</span>
            <TodoList todos={todos} toggleCheck={toggleCheck}/>
          </div>

          {/* clear button */}

          <button onClick={clearCheckedItems}>Clear Completed</button>

        </div>
      </div>
    </StrictMode>
  );
}

export default App;