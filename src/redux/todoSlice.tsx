import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { initialStateType, actionType, todoType } from "../Types/todosType";

const initialState: initialStateType = {
  todos: [],
  isEdit: false,
  text: "",
  id: "",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: initialStateType, action: actionType) => {
      const todo: todoType = {
        id: uuidv4(),
        text: action.payload,
        date: new Date().getTime(),
        isDone: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state: initialStateType, action: actionType) => {
      state.todos = state.todos.filter((todo:todoType) => todo.id !== action.payload.id);
    },
    getById: (state: initialStateType, action: actionType) => {
      let todo = state.todos.find((todo:todoType) => todo.id === action.payload.id);

      state.text = todo?.text;
      state.id = todo?.id;
      state.isEdit = true;
    },
    editTodo: (state: initialStateType, action: actionType) => {
      state.todos = state.todos.map((todo:todoType) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      state.text = "";
      state.id = "";
      state.isEdit = false;
    },
    cancelEditTodo: (state: initialStateType) => {
      state.text = "";
      state.id = "";
      state.isEdit = false;
    },
    changeStatus: (state: initialStateType, action: actionType) => {
      state.todos = state.todos.map((todo:todoType) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});
export const {
  addTodo,
  removeTodo,
  getById,
  changeStatus,
  editTodo,
  cancelEditTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
