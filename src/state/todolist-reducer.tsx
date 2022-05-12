import {v1} from "uuid"

export type todolistType = {
    id: string
    title: string
    filter: string
}

export let todolistId = v1()

const initialState: todolistType = {
        id: todolistId,
        title: "TODOLIST FIRST",
        filter: "string"
    }


export function todolistsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD-TODOLIST':
            let newTodolist = {id: v1(), title: 'newTODOLIST', filter: 'ALL'}
            return {newTodolist, ...state}
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
