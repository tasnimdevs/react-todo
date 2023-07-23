import { useState } from "react";
import "./index.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">Todo List</h1>
      <ul>
        <li>
          <label >
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="checkbox" />
            Item1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label >
            <input type="checkbox" />
            Item2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}
