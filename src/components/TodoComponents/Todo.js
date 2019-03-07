import React from "react";

function Todo(props) {
    return (
    <div>
        <p>{props.item.task}</p>
    </div>
    )      
}
export default Todo;