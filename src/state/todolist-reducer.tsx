import { v1 } from "uuid"

export type todolistType = {
    id: string
    name: string
    filter: string
}

export type initialStateType = Array<todolistType>

export let todolistId = v1()

const initialState: initialStateType = [{
    id: todolistId,
    name: "svdddsv",
    filter: "string"},]

export function todolistsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD-TODOLIST':
            let newTodolist= {id: v1, name: 'newTODOLIST', filter: 'ALL'}
            console.log([newTodolist, ...state])
            return [newTodolist, ...state]
        case 'two':
            return {state}
        default:
            return state
    }
}

export const addTodolistAC = () => {
    return {
        type: 'ADD-TODOLIST',
    }
}
export const ACtwo = () => {
    return {
        type: 'two',
    }
}
