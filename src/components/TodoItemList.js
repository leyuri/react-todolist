import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="블록체인 퀴즈 시험 준비"/>
        <TodoItem text="알바"/>
        <TodoItem text="영어공부"/>        
      </div>
    );
  }
}

export default TodoItemList;