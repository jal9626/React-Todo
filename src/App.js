import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
       todos: [
        {
          task: '',
          id: Date.now(),
          completed: false,
        },
      ],
       todo: ''
    };
  }
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  formSubmitHandler = event => {
    event.preventDefault();
    let newTodo = {
      task: "",
      id: Date.now(),
      completed: false,
    };
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTodo],
        todo: "",
      };
    });
  };  

  render() {
    return (
    
        <div>
        <TodoList 
          todos={this.state.todos} 
        />
        
        <TodoForm 
          value={this.state.todo}
          handleInputChange={this.inputChangeHandler}
          handleFormSubmit={this.formSubmitHandler} 
          />
        </div>
       
      
    );
  } 
}

export default App;
