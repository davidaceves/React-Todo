import React from "react";

function TodoForm(props) {
    return (
        <form onSubmit={ props.addItemHandler }>
            <input type="text" name="task" placeholder="...todo" value={props.task} onChange={props.inputHandler}/> 
            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;