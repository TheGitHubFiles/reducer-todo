import React, { useState } from 'react'


const TodoForm = (props) => {
    const { addTodo } = props
    const [form, setForm] = useState('')

    const onChange = e => {
        setForm(e.target.value)
    }
    const submit = e => {
        e.stopPropagation()
        e.preventDefault()
        const blah = {
            name: form,
            complete: false,
            id: Date.now()
        }
        addTodo(blah)
        setForm('')
    }

    return (
        <form onSubmit={submit}>
            <input
                type='text'
                value={form}
                onChange={onChange}

            ></input>
            <button onSubmit={submit}>submit</button>
        </form>
    )

}

export default TodoForm