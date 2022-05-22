import {Dispatch} from "redux"
import {v1} from "uuid"
import {todolistsAPI, TodolistType} from "../api/todolist-api"

const initialState: Array<TodolistDomainType> = []

export function todolistsReducer(state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return action.todolists.map(tl => ({...tl, filter: 'all'}))
        case 'CREATE-TODOLISTS':
            return [{...action.todolist, filter: 'all'}, ...state]
        case 'DELETE-TODOLISTS':
            return state.filter(f=>f.id !== action.todolistId)
        default:
            return state
    }
}

// actions
export const setTodolistsAC = (todolists: Array<TodolistType>) => ({type: 'SET-TODOLISTS', todolists} as const)
export const createTodolistAC = (todolist: TodolistType) => ({type: 'CREATE-TODOLISTS', todolist} as const)
export const deleteTodolistAC = (todolistId: string) => ({type: 'DELETE-TODOLISTS', todolistId} as const)

// thunks
export const fetchTodolistsTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        todolistsAPI.getTodolists()
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
            })
    }
}
export const createTodolistsTC = (title: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        todolistsAPI.createTodolist(title)
            .then((res) => {
                // @ts-ignore
                dispatch(createTodolistAC(res.data.data.item))
                console.log(res.data.data.item)
            })
    }
}

export const deleteTodolistsTC = (todolistsId: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        todolistsAPI.deleteTodolist(todolistsId)
            .then((res) => {
                dispatch(deleteTodolistAC(todolistsId))
            })
    }
}

// types
export type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
export type CreateTodolistActionType = ReturnType<typeof createTodolistAC>;
export type DeleteTodolistActionType = ReturnType<typeof deleteTodolistAC>;

type ActionsType = SetTodolistsActionType | CreateTodolistActionType | DeleteTodolistActionType

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}
