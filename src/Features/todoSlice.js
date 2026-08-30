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

        },

    },
})


export const { addTodo } = todoSlice.actions

export default todoSlice.reducer