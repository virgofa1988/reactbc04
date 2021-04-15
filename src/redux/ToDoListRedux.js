import { ToDoListDarkTheme } from "../Components/JSS_StyledComponent/Theme/TodoList/ToDoListDarkTheme"
import { ToDoListLightTheme } from "../Components/JSS_StyledComponent/Theme/TodoList/ToDoListLightTheme"
import { ToDoListPrimaryTheme } from "../Components/JSS_StyledComponent/Theme/TodoList/ToDoListPrimaryTheme"
import { addTask, deleteTask, editTask, checkedTask, updateTask } from "../Components/JSS_StyledComponent/ActionManager/ActionManager"

const stateDefault = {
    taskList: [
        { id: 1, taskName: "Task 1", done: true },
        { id: 2, taskName: "Task 2", done: true },
        { id: 3, taskName: "Task 3", done: false },
        { id: 4, taskName: "Task 4", done: true }
    ],
    themeList: [
        ToDoListDarkTheme, ToDoListLightTheme, ToDoListPrimaryTheme
    ],
    taskEdit: {}

}

export const TodoListReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case addTask: {
            console.log("Reducer addTask", action)
            let taskListUpdate = [...state.taskList, action.newTask]
            state.taskList = taskListUpdate;
            return { ...state }
        }
        case deleteTask: {
            state.taskList = state.taskList.filter(task => task.id !== action.taskDeleteID)
            return { ...state }
        }
        case checkedTask: {
            console.log("Checked Task ID", action.taskCheckID)
            let taskListUpdate = [...state.taskList]
            let index = taskListUpdate.findIndex(task => task.id === action.taskCheckID)
            taskListUpdate[index].done = false;
            state.taskList = taskListUpdate
            return { ...state }
        }
        case editTask: {
            // console.log("Task edited is ", action.taskEdit);
            state.taskEdit = action.taskEdit;
            return { ...state }
        }
        case updateTask: {

            state.taskEdit = { ...state.taskEdit, taskName: action.taskUpdatedName }
            let index = state.taskList.findIndex(task => task.id == state.taskEdit.id)
            state.taskList[index].taskName = state.taskEdit.taskName
            return { ...state }
        }
    }
    return { ...state }
}