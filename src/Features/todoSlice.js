import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: crypto.randomUUID(),
                text: action.payload,
                completed: false
            }
            state.push(newTodo)
        },
        toggleTodo: (state, action) => {
            const found = state.find((toDoitem) => toDoitem.id === action.payload)
            found.completed = !found.completed
        },
        deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        editTodo: (state, action) => {
            const found = state.find((toDoitem) => toDoitem.id === action.payload.id)
            found.text = action.payload.text
        }
    },
})

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer