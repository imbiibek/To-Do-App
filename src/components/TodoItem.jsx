import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, editTodo } from '../Features/todoSlice'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleSave = () => {
        if (editText.trim().length === 0) return
        dispatch(editTodo({ id: todo.id, text: editText.trim() }))
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <li className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 mb-2">
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    autoFocus
                    className="flex-1 border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleSave}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                >
                    Save
                </button>
            </li>
        )
    }

    return (
        <li className="flex items-center justify-between border border-gray-300 rounded px-3 py-2 mb-2">
            <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className="cursor-pointer flex-1 text-gray-800"
            >
                {todo.text}
            </span>
            <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm ml-3"
            >
                Edit
            </button>
        </li>
    )
}

export default TodoItem