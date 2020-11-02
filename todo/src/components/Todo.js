import React from 'react'
import './Todo.css'

const Todo = (props) => {
    const { handleToggle, item } = props
    const toggle = () => {
        console.log(item.complete)
        handleToggle(item.id)
        console.log(item.complete)
    }

    return (
        <div onClick={toggle} className={item.complete ? 'completed' : ''}>{item.name}</div>
    )

}
export default Todo