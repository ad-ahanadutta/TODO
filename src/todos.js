import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div className=" collection-item" key={todo.id}>
          <button className="walves-effect waves-light btn-small" onClick={ () => {deleteTodo(todo.id)}}>Done</button>        <span>
              {todo.content}
          </span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p> 
  )
  return(
    <div className="todos collection">
      {todoList}
    </div>
  )
}
export default Todos;
