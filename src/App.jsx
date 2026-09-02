import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import CompletedList from './components/CompletedList'

function App() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
            <TodoForm />
            <TodoList />
            <CompletedList />
        </div>
    )
}

export default App