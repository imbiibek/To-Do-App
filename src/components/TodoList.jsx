import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todos = useSelector((state) => state.toDo)
    const activeTodos = todos.filter((todo) => !todo.completed)

    if (activeTodos.length === 0) {
        return <p className="text-gray-400 text-center mb-4">No active todos.</p>
    }

    return (
        <ul className="mb-6">
            {activeTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList