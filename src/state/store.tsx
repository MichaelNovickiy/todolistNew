import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./task-reducer";
import {todolistsReducer} from "./todolist-reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;