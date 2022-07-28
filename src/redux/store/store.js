import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/Todos/todosSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})
