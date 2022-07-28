import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./initialState";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        add : (state, action) => {
            state.tasks.push(
                {id: action.payload.id, text: action.payload.text}
            );
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter(todo => todo.id !== action.payload.id);
        }
    }
})

export const {add, remove} = todosSlice.actions;
export default todosSlice.reducer;
