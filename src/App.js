import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: "",
      id: "",
      completed: ""
    };
  }

  formSubmitHandler = event => {
    event.preventDefault();

    let newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    

  }

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <TodoForm />
      </form>
    );
  }
}

export default App;
