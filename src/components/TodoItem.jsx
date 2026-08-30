import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../Features/todoSlice'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()

    return (
        <li className="flex items-center justify-between border border-gray-300 rounded px-3 py-2 mb-2">
            <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`cursor-pointer flex-1 ${
                    todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
                }`}
            >
                {todo.text}
            </span>
            <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm ml-3"
            >
                Delete
            </button>
        </li>
    )
}

export default TodoItem