import React from "react";

function TodoForm(props) {
    return (
        <form onSubmit={ props.addItemHandler }>
            <input type="text" name="task" placeholder="...to-do" value={props.task} onChange={props.inputHandler}/> 
            <button className="buttons" type="submit">Add To-do</button>
            <button className="buttons" onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;