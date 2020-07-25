import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        const todos = this.props.tasks.map((value, index) => (
            <Todo key={index} task={value.task} id={value.id} removeTodo={this.removeTodo.bind(this, value.id)} />
        ));
        return (
            <div>
                <h1>THINGS TO DO</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;