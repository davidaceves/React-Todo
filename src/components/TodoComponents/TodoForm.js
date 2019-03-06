import React from "react";

function TodoForm() {
    return (
        <React.Fragment>
            <input name="todo" placeholder="...todo"/> 
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </React.Fragment>
    )
}

export default TodoForm;