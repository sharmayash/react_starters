import React, { Component } from 'react';
import Todos from './todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todo: [
      { id: 1, content: 'buy chocalates' },
      { id: 2, content: 'play fortnite' }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todo.filter(todo => {
      return todo.id !== id; 
    });
    this.setState ({
      todo: todos
    })
  }
  addtodo = (todo) => {
    todo.id = Math.random();
      let todos = [...this.state.todo, todo]
      this.setState ({
        todo: todos
      })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addtodo={this.addtodo} />
        <Todos todos={this.state.todo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
