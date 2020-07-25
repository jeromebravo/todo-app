import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {task: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.task);
        this.setState({task: ''});
        e.target.reset();
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <h1>NEW TODO</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='task' id='task' onChange={this.handleChange} />
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;