import React from "react";

import Todo from "./Todo";

function TodoList(props) {
    return (
     <div>
         {props.to_do.map(to_do => {
             return <Todo item={to_do} />
         })}
     </div>
    )   
}

export default TodoList;