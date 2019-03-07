import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

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

  render() {
    return (
      <div>
        <TodoForm task={this.state.task} inputHandler={this.inputHandler} />
      </div>
    );
  }
}

export default App;
