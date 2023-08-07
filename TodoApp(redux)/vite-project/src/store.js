import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./slices/TodoSlice"

const store = configureStore({
    reducer: todoSlice.reducer
});

export default store;