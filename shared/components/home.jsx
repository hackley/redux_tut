import React                  from 'react';
import TodoView              from 'components/todo_view';
import TodoForm              from 'components/todo_form';
import { bindActionCreators } from 'redux';
import * as TodoActions       from 'actions/todo_actions';
import { connect }            from 'react-redux';

@connect(state => ({ todos: state.todos }))

export default class Home extends React.Component {
  render() {
    const { todos, dispatch } = this.props;

    return (
      <div id="todo-list">
        <TodoView todos={todos}
          {...bindActionCreators(TodoActions, dispatch)} />
        <TodoForm
        {...bindActionCreators(TodoActions, dispatch)} />
      </div>
    );
  }
}
