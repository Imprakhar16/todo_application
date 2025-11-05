import { createAsyncThunk } from "@reduxjs/toolkit";
import { createTodo, fetchAllTodos } from "../../services/todoService";

export const addTodoThunk = createAsyncThunk(
  "todos/createTodo",
  async (body, { rejectWithValue }) => {
    try {
      const response = await createTodo(body);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to Add todo"
      );
    }
  }
);

export const allTodosThunk = createAsyncThunk(
  "todos/todos",
  async (body, { rejectWithValue }) => {
    try {
      const response = await fetchAllTodos(body);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to get Todos"
      );
    }
  }
);
