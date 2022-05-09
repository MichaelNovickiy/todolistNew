import { v1 } from "uuid"

export type todolistType = {
    id: string
    name: string
    filter: string
}

export type initialStateType = Array<todolistType>

const initialState: initialStateType = []

export function todolistsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD-TASK':
            let newTask= {id: v1, name: 'newTask', filter: 'ALL'}
            return {...state, newTask}
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
