import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todos = useSelector((state) => state.toDo)

    if (todos.length === 0) {
        return <p className="text-gray-400 text-center">No todos yet. Add one above!</p>
    }

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList