import { combineReducers } from 'redux';
import { GioHangReducer } from '../GioHangReducer' //Store con đc import vào, có thể có nhiều store con
import { TodoListReducer } from "../ToDoListRedux"
//Store tổng ứng dụng

export const rootReducer = combineReducers({
    //Nơi sẽ chứa các reducer(store con từng nghiệp vụ ví dụ: Giỏ Hàng..)
    GioHangReducer: GioHangReducer,
    TodoListReducer: TodoListReducer


})