import {v1} from "uuid";
import {log} from "util";

const ADD_TASK = 'ADD-TASK'
const CHANGE_CHECKED_TASK = 'CHANGE_CHECKED_TASK'
const REMOVE_TASK = 'REMOVE_TASK'


type actionType = {
    type: 'ADD-TASK' | 'CHANGE_CHECKED_TASK' | "REMOVE_TASK"
    title: string
    taskId: string
}

export type TasksStateType = Array<TaskType>

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

const initialState: TasksStateType = [{
    id: 'sdsvsdd',
    title: 'string',
    isDone: true
}, {
    id: 'sdsvsasdd',
    title: 'sdvsdvdsvdsvsdvs',
    isDone: true
}, {
    id: 'sdsvsdascd',
    title: 'asf',
    isDone: false
},]


export function tasksReducer(state = initialState, action: actionType): TasksStateType {
    switch (action.type) {
        case ADD_TASK: {
            let newTask: TaskType = {
                id: v1(),
                title: action.title,
                isDone: false,
            }
            return [newTask, ...state];
        }
        case CHANGE_CHECKED_TASK:
            return state.map(f => f.id === action.taskId ? {...f, isDone: !f.isDone} : {...f})
        case REMOVE_TASK:
            return state.filter(f=>f.id !== action.taskId)
        default:
            return state
    }
}

export const addTaskAC = (text: string) => {
    return {
        type: ADD_TASK,
        title: text
    }
}
export const changeCheckedTaskAC = (taskId: string) => {
    return {
        type: CHANGE_CHECKED_TASK,
        taskId
    }
}
export const removeTaskAC = (taskId: string) => {
    return {
        type: REMOVE_TASK,
        taskId
    }
}
