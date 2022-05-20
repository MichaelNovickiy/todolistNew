import React, {useEffect} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodolistsTC, TodolistDomainType,} from "./state/todolist-reducer";
import {AppRootStateType} from './state/store';
import {fetchTasksTC, TasksStateType} from "./state/task-reducer";

function App() {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchTodolistsTC())
    }, [])


    return (
        <div className='Main'>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id]

                    return (
                        <Todolist
                            key={tl.id}
                            id={tl.id}
                            title={tl.title}
                            tasks={allTodolistTasks}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
