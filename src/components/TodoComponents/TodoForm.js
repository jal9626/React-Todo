import React from 'react';

function TodoForm(props) {
   return (
    <div>

        <form onSubmit={props.handleFormSubmit}>
          <input 
            type='text'
            name="todo" 
            value={props.value}
            onChange={props.handleInputChange}
            placeholder="...todo"
          />
          <button type="submit">Add Todo</button>
          <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>

    </div> 
    )  
}

export default TodoForm;