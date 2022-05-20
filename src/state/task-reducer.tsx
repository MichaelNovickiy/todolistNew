import { Dispatch } from "redux";
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses, TaskType, todolistsAPI, TodolistType} from "../api/todolist-api";

// const ADD_TASK = 'ADD-TASK'
// const CHANGE_CHECKED_TASK = 'CHANGE_CHECKED_TASK'
// const REMOVE_TASK = 'REMOVE_TASK'


// type actionType = {
//     type: 'ADD-TASK' | 'CHANGE_CHECKED_TASK' | "REMOVE_TASK"
//     title: string
//     taskId: string
// }

const initialState: TasksStateType = {}


export const tasksReducer = (state: TasksStateType = initialState, action: any): TasksStateType => {
    switch (action.type) {
        case 'SET-TODOLISTS': {
            const copyState = {...state}
            // @ts-ignore
            action.todolists.forEach(tl => {
                copyState[tl.id] = []
            })
            return copyState
        }
        case 'SET-TASKS':
            return {...state, [action.todolistId]: action.tasks}
        default:
            return state
    }
}

// actions
export const setTasksAC = (tasks: Array<TaskType>, todolistId: string) =>
    ({type: 'SET-TASKS', tasks, todolistId} as const)


// thunks
export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch<ActionsType>) => {
    todolistsAPI.getTasks(todolistId)
        .then((res) => {
            const tasks = res.data.items
            const action = setTasksAC(tasks, todolistId)
            dispatch(action)
        })
}

// types
export type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

type ActionsType = ReturnType<typeof setTasksAC>
