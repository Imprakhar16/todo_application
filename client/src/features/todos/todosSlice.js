import { createSlice } from "@reduxjs/toolkit";
import { addTodoThunk, allTodosThunk } from "./todosThunk";

const initialState = {
  todos: [],
  loading: false,
  error: null,
  success: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    resetTodoState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoThunk.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.todos.push(action.payload);
      })
      .addCase(addTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Failed to add todo";
      })
      .addCase(allTodosThunk.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(allTodosThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.todos = action.payload.todos;
      })
      .addCase(allTodosThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Failed to get Todos";
      });
  },
});

export const { resetTodoState } = todoSlice.actions;
export default todoSlice.reducer;
