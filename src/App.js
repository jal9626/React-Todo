import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

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
      task: this.state.todo,
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
  toggleItem = itemId => {
    {console.log('clicked')}
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todoItem => {
          if (todoItem.id === itemId){
            return {
              task: todoItem.task,
              id: todoItem.id,
              completed: !todoItem.completed
            };
          } else {
            return todoItem;
          }
        })
      };
    })
  }

  clearCompleted = () => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todoItem => {
          return !todoItem.completed;
          
        })
      };
    });
  };

  render() {
    return (
      
        <div>
        <TodoList 
          todos={this.state.todos} toggleItem={this.toggleItem}
        />
        
        <TodoForm 
          value={this.state.todo}
          handleInputChange={this.inputChangeHandler}
          handleFormSubmit={this.formSubmitHandler} 
          clearCompleted={this.clearCompleted}
          />
        </div>
        
    
    );
  } 
}

export default App;
