import { Dispatch } from "redux"
import {v1} from "uuid"
import { todolistsAPI } from "../api/todolist-api"

const ADD_TODOLIST = 'ADD_TODOLIST'
const CHANGE_FILTER = 'CHANGE_FILTER'

export type todolistType = {
    id: string
    title: string
    filter: filterType
}

export let todolistIdOne = v1()
export let todolistIdTwo = v1()

export type filterType = 'all' | 'active' | 'completed'

// const initialState: todolistType[] = [
//     {id: todolistIdOne, title: 'todolistOne', filter: 'all'},
//     {id: todolistIdTwo, title: 'todolistTwo', filter: 'all'},
// ]
const initialState: todolistType = {id: todolistIdOne, title: 'todolistOne', filter: 'all'}

export function todolistsReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADD_TODOLIST:
            let newTodolist: todolistType = {id: v1(), title: 'newTODOLIST', filter: 'all'}
            return {newTodolist, ...state}
        case CHANGE_FILTER:
            return {...state, filter: action.value}
        case 'SET-TODOLISTS':
            return action.todolists.map(tl => ({...tl, filter: 'all'}))
        default:
            return state
    }
}

export const addTodolistAC = () => {
    return {
        type: ADD_TODOLIST,
    }
}
export const changeFilterAC = (value: filterType) => {
    return {
        type: CHANGE_FILTER,
        value
    }
}

export const fetchTodolistsTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        todolistsAPI.getTodolists()
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
            })
    }
}

//types
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;

type ActionsType =
    | AddTodolistActionType
export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}
