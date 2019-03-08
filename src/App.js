import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import "./components/TodoComponents/Todo.css"

const to_do = [
  {
    task: ""
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { 
      to_do: to_do,
      task: ""
    };
  }

  inputHandler = event => {
    this.setState ({ [event.target.name]: event.target.value });
  };

  toggleItem = itemId => {
    this.setState(prevState => {
      return {
        to_do: prevState.to_do.map(todo => {
          if (todo.id === itemId) {
            return {
              task: todo.task,
              id: todo.id,
              completed: !todo.completed
            }
          } else {
            return todo;
          }
        })
      }
    })
  }

  addItemHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        to_do: [
          ...prevState.to_do,
          {
            task: prevState.task,
            id: Date.now(),
            completed: false
          }
        ],
        task: ""
      }
    })
  }

  clearCompleted = event => {
    event.preventDefault();
  
    this.setState(prevState => {
      const to_do = prevState.to_do.filter(item => {
        return !item.completed;
      })
      
      return {to_do};
    })
  }

  render() {
    return (
      <div>
        <TodoForm task={ this.state.task } inputHandler={ this.inputHandler } addItemHandler={ this.addItemHandler } clearCompleted={ this.clearCompleted }/>
        <TodoList to_do={ this.state.to_do } toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
