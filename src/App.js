import React from 'react';
import Todos from './todos';
import AddTodo from './add-todos';

class App extends React.Component{
  state={
    todos:[
      {id:1, content:'Get a proper haircut'},
      {id:2,content:'Start working out'},
      {id:3,content:'Finish javascript first, you idiot!'},
      {id:4,content:'Go to sleep'}
    ]
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id= Math.random();
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }
  render(){
    return(
      <div className="todo-app container">
        <h1 className="center"><i class="fas fa-clipboard-list"></i>Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
