import React, {useEffect} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {useDispatch, useSelector} from "react-redux";
import {createTodolistsTC, fetchTodolistsTC, TodolistDomainType,} from "./state/todolist-reducer";
import {AppRootStateType} from './state/store';
import {fetchTasksTC, TasksStateType} from "./state/task-reducer";
import {InputForCreate} from "./InputText";

function App() {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchTodolistsTC())
    }, [])

    const addTodolist = (title: string) => {
        // @ts-ignore
        dispatch(createTodolistsTC(title))
    }

    return (
        <div className='Main'>
            <InputForCreate addTodolistOrTask={addTodolist}/>
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
