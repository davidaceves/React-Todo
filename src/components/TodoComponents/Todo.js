import React from "react";


function Todo(props) {
    let completed = props.item.completed ? " completed" : "";

    return (
    <div className={`task ${completed}`} onClick={ () => props.toggleItem(props.item.id)}>
        <p>{props.item.task}</p>
    </div>
    )      
}
export default Todo;