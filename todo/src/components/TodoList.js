import React from 'react'
import Todo from './Todo.js'

const TodoList = (props) => {
    const { handleToggle, clearCompleted, list } = props
    const onClicky = (e) => {
        e.preventDefault()
        e.stopPropagation()
        clearCompleted()
    }

    return (
        <>
            {list.map(item => {
                return <Todo item={item} handleToggle={handleToggle} />
            })}
            <button onClick={onClicky}>remove completed</button>
        </>
    )

}
export default TodoList