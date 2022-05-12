import {todolistId} from "./todolist-reducer";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

const initialState: TasksStateType = {
    [todolistId]: [{id: 'sdsvsdd', title: 'string', isDone: true}]}


export function tasksReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD-TASK':
            return {state}
        case 'two':
            return {state}
        default:
            return state
    }
}

export const addTaskAC = () => {
    return {
        type: 'ADD-TASK',
    }
}
export const ACtwo = () => {
    return {
        type: 'two',
    }
}
