import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Route, Redirect } from 'react-router-dom';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actionCreator';
import NewTodoForm from './NewTodoForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    handleSubmit(task) {
        this.props.addTodo(task);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <Route exact path='/' render={() => <Redirect to='/todos' />} />
                <Route exact path='/todos' component={() => <TodoList tasks={this.props.todos} removeTodo={this.removeTodo} />} />
                <Route path='/todos/new' component={props => <NewTodoForm {...props} handleSubmit={this.handleSubmit} />} />
            </div>
      );
    }
}

function mapStateToProp(reduxState) {
    return {todos: reduxState.todos};
}

export default connect(mapStateToProp, {addTodo, removeTodo})(App);