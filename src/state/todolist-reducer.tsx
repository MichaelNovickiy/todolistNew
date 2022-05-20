import {Dispatch} from "redux"
import {v1} from "uuid"
import {todolistsAPI, TodolistType} from "../api/todolist-api"

const initialState: Array<TodolistDomainType> = []

export function todolistsReducer(state:Array<TodolistDomainType> = initialState, action: any): Array<TodolistDomainType> {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return action.todolists.map((tl: Array<TodolistType>) => ({...tl, filter: 'all'}))
        default:
            return state
    }
}

// actions
export const setTodolistsAC = (todolists: Array<TodolistType>) => ({type: 'SET-TODOLISTS', todolists} as const)

// thunks
export const fetchTodolistsTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        todolistsAPI.getTodolists()
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
            })
    }
}

// types
export type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
type ActionsType = SetTodolistsActionType
export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}
