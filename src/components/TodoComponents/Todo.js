import React from 'react';


function Todo(props) {
    let completed = props.todo.completed ? " completed" : "";
    return (
        <div 
        className={`todo ${completed}`}
        onClick={event => {
            props.toggleItem(props.todo.id)
         }}
        >
            {props.todo.task}
        </div>
    )
}

export default Todo;