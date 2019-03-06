// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

function TodoList(props) {
    return (
       
        <div>
          <p>{props.task.task}</p>
        </div>
    );
}

export default TodoList;

