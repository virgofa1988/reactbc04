import React, { useEffect, useReducer, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Container } from '../Components/TodoList/Container/Container'
import { ThemeProvider } from "styled-components"
import { Dropdown } from "../Components/TodoList/Dropdown"
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from "../Components/TodoList/Heading"
import { TextField, Label, Input } from "../Components/TodoList/TextField"
import { Button } from "../Components/TodoList/Button"
import { Table, Thead, Tbody, Tr, Td, Th } from "../Components/TodoList/Table"
import { addTask, deleteTask, checkedTask, editTask, updateTask } from "../ActionManager/ActionManager"


export default function TodoList() {
    //Start setTheme 
    // B1: Lấy giá trị mảng theme từ reducer về
    const ThemeList = useSelector(state => state.TodoListReducer.themeList)
    //B2: Tạo State để quản lý themeID từ người dùng lựa chọn và truyền giá trị theme cho ThemeProvider
    let [themeID, setThemeID] = useState(0)
    //End setTheme 


    //Lấy TaskName Input Từ Người Dùng
    let [taskNameInput, setTaskNameInput] = useState('')
    //Khai báo hàm dispatch in hook
    const dispatch = useDispatch()

    //Get taskList from Reducer by useSelector to render UI
    const taskList = useSelector(state => state.TodoListReducer.taskList)
    //Get Task Edit from Reducer (Day la props or state of redux)
    const taskEdit = useSelector(state => state.TodoListReducer.taskEdit)

    //ComponentDidUpdate - Theo Doi state taskEdit
    useEffect(() => {
        setTaskNameInput(
            taskNameInput = taskEdit.taskName
        )
    }, [taskEdit])







    //Render TaskToDo
    const renderTaskToDo = () => {
        return taskList.filter(task => task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th>{task.taskName}</Th>
                    <Th className="text-right">
                        <Button onClick={() => {
                            dispatch({
                                type: editTask,
                                taskEdit: task
                            })
                        }}><i className="fa fa-edit" ></i></Button>
                        <Button onClick={() => {
                            dispatch({
                                type: checkedTask,
                                taskCheckID: task.id
                            })
                        }} className="mx-2"><i className="fa fa-check" ></i></Button>
                        <Button onClick={() => {
                            dispatch({
                                type: deleteTask,
                                taskDeleteID: task.id
                            })
                        }}><i className="fa fa-trash" ></i></Button>
                    </Th>
                </Tr>
            )
        })
    }
    //Render TaskCompleted
    const renderTaskCompleted = () => {
        return taskList.filter(task => !task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th>{task.taskName}</Th>
                    <Th className="text-right">
                        <Button onClick={() => {
                            dispatch({
                                type: deleteTask,
                                taskDeleteID: task.id
                            })
                        }}><i className="fa fa-trash" ></i></Button>
                    </Th>
                </Tr>
            )
        })
    }
    return (
        <ThemeProvider theme={ThemeList[themeID]}>
            <Container className="w-50">
                <Dropdown onChange={(event) => {
                    //Xử lý thao tác lựa chọn theme thông qua bắt giá trị người dụng lựa từ value
                    console.log(event.target.value);
                    //Set Lại ThemeID để cập nhật truyền vào ThemeProvider bên trên
                    setThemeID(themeID = event.target.value)
                }
                }>
                    <option value="0">Dark Theme</option>
                    <option value="1">Light Theme</option>
                    <option value="2">Primary Theme</option>
                </Dropdown>
                <Heading3>To Do List</Heading3>
                <TextField value={taskNameInput}
                    onChange={(event) => {
                        setTaskNameInput(
                            taskNameInput = event.target.value
                        )
                    }}
                    label="Task Name" className="w-50" ></TextField>
                <Button className="ml-2"
                    onClick={() => {
                        //Tạo ra task mới theo object
                        let newTask = {
                            id: Date.now(),
                            taskName: taskNameInput,
                            done: true
                        }
                        console.log(newTask)
                        dispatch({
                            type: addTask,
                            newTask
                        })
                    }}> <i className="fas fa-plus mr-2"></i>Add Task</Button>
                <Button className="ml-2" onClick={() => {
                    dispatch({
                        type: updateTask,
                        taskUpdatedName: taskNameInput

                    })
                }}><i className="fas fa-upload mr-2"></i>Update Task</Button>
                <hr />
                <Heading3>Task To Do</Heading3>
                <Table>
                    <Thead>
                        {renderTaskToDo()}
                    </Thead>
                </Table>
                <Heading3>Task Completed</Heading3>
                <Table>
                    <Thead>
                        {renderTaskCompleted()}
                    </Thead>
                </Table>
            </Container>
        </ThemeProvider >
    )
}
