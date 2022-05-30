import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from "./state/store";
import {TasksStateType} from "./state/task-reducer";
import { InputForCreate } from './InputText';
import { Todolist } from './Todolist';
import {addTodolistTC, fetchTodolistsTC, removeTodolistTC, TodolistDomainType} from './state/todolist-reducer';


export const TodolistsList: React.FC = () => {

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()

    useEffect(() => {
        const thunk = fetchTodolistsTC()
        // @ts-ignore
        dispatch(thunk)
    }, [])

    const removeTodolist = useCallback(function (id: string) {
        const thunk = removeTodolistTC(id)
        // @ts-ignore
        dispatch(thunk)
    }, [])

    const addTodolist = useCallback((title: string) => {
        const thunk = addTodolistTC(title)
        // @ts-ignore
        dispatch(thunk)
    }, [dispatch])


    return (
        <div className='Main'>
            <InputForCreate addItem={addTodolist}/>
            {todolists.map(tl => {
                let allTodolistTasks = tasks[tl.id]

                return <Todolist
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={allTodolistTasks}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                />
            })
            }
        </div>
    );
    ;
}