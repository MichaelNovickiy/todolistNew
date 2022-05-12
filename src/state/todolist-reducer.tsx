import {v1} from "uuid"

const CHANGE_FILTER = 'CHANGE_FILTER'

export type todolistType = {
    id: string
    title: string
    filter: filterType
}

export let todolistId = v1()
export type filterType = 'all' | 'active' | 'completed'

const initialState: todolistType = {
    id: todolistId,
    title: "TODOLIST FIRST",
    filter: 'all'
}


export function todolistsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD-TODOLIST':
            let newTodolist: todolistType = {id: v1(), title: 'newTODOLIST', filter: 'all'}
            return {newTodolist, ...state}
        case CHANGE_FILTER:
            return {...state, filter: action.value}
        default:
            return state
    }
}

export const addTodolistAC = () => {
    return {
        type: 'ADD-TODOLIST',
    }
}
export const changeFilterAC = (value: filterType) => {
    return {
        type: CHANGE_FILTER,
        value
    }
}
