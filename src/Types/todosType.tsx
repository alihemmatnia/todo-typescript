export interface actionType {
  payload: any;
}
export interface todoType {
  id?: string;
  text?: string;
  date?: number;
  isDone?: boolean;
}
export interface initialStateType {
  todos: todoType[];
  isEdit: boolean;
  text?: string;
  id?: string;
}
export interface reducerTyoe{
  todo:todoType[]
}
