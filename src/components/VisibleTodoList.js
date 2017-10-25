import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index.js';
import TodoList from './TodoList';

const getVisibleTodos = (todos,filter) => {
  switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter:' + filter)
  }
}
const mapStateToprops = (state) => ({
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
})
const mapDispatchToProps = {
  onTodoClick: toggleTodo
}
const VisibleTodoList = connect(
    mapStateToprops,
    mapDispatchToProps
)(TodoList)
export default VisibleTodoList