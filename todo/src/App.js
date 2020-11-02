import React, { useReducer } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm.js'
import reducer from './reducers'
import actions from './actions'


const list = [{
  name: 'throwup',
  complete: false,
  id: Date.now()
}]

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, list)


  const addTodo = (listItem) => {
    console.log(listItem)
    dispatch(actions.addItem(listItem))

  }

  const handleToggle = (itemId) => {
    console.log(itemId)
    dispatch(actions.toggleStrike(itemId))
  }
  const clearCompleted = () => {
    dispatch(actions.deleteItem())

  }

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList list={state} clearCompleted={clearCompleted} handleToggle={handleToggle} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
    </div>
  );

}

export default App;
