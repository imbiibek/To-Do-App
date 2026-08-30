import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/todoSlice'

const TodoForm = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length === 0) return
        dispatch(addTodo(text.trim()))
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm