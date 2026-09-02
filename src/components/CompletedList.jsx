import { useSelector } from 'react-redux'
import CompletedItem from './CompletedItem'

const CompletedList = () => {
    const todos = useSelector((state) => state.toDo)
    const completedTodos = todos.filter((todo) => todo.completed)

    if (completedTodos.length === 0) return null

    return (
        <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-600">Completed tasks</h2>
            <ul>
                {completedTodos.map((todo) => (
                    <CompletedItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default CompletedList