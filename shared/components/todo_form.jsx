import React from 'react';

export default class TodosForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let node = this.refs['todo-input'];
    this.props.createTodo(node.value);
    node.value = '';
  }

  render() {
    return (
      <div id="todo-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="type todo" ref="todo-input" />
          <input type="submit" value="OK!" />
        </form>
      </div>
    );
  }
}
