import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";

const tasks = [
  {
    task: '',
    id: 0,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
       stateTasks: tasks,
       task: "",
       id: Date.now(),
       completed: false,
    };
  }
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  formSubmitHandler = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
    };
    this.setState(prevState => {
      return {
        stateTasks: [...prevState.stateTasks, newTask],
        task: "",
        id: Date.now(),
        completed: false,
      };
    });
  };  

  render() {
    return (
      <div>
        <div>
          {this.state.stateTasks.map((task, id) => (
            <TodoList task={task} key={id} /> 
          ))} 
        </div>
        <form onSubmit={this.formSubmitHandler}>
          <input 
            name="task" 
            value={this.state.task}
            onChange={this.inputChangeHandler}
            placeholder="...todo"
          />
          <button type="submit">Add Todo</button>
          <button>Clear Completed</button>
        </form>  
      </div>
    )
  } 
}

export default App;
