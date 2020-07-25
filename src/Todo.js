import React from 'react';

const Todo = ({task, id, removeTodo}) => (
    <li id={id} onClick={removeTodo}>{task}</li>
);

export default Todo;