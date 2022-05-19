import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {useDispatch, useSelector} from "react-redux";
import { todolistType,} from "./state/todolist-reducer";
import {AppRootStateType} from './state/store';
import {addTaskAC, TasksStateType} from "./state/task-reducer";
import {InputText} from "./InputText";

function App() {
    const todolists = useSelector<AppRootStateType, todolistType>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch()

    // let allTasks = tasks
    // if (todolists[0].filter === 'completed') {
    //     allTasks = tasks.filter(t => !t.isDone)
    // }
    // if (todolists[0].filter === 'active') {
    //     allTasks = tasks.filter(t => t.isDone)
    // }
    let allTasks = tasks
    if (todolists.filter === 'completed') {
        allTasks = tasks.filter(t => !t.isDone)
    }
    if (todolists.filter === 'active') {
        allTasks = tasks.filter(t => t.isDone)
    }


    return (
        <div className='Main'>
            <Todolist title={todolists.title}
                      tasks={allTasks}
                      filter={todolists.filter}
            />
        </div>
    );
}

export default App;
