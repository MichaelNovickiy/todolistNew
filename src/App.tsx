import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {useDispatch, useSelector} from "react-redux";
import {addTodolistAC, todolistType} from "./state/todolist-reducer";
import {InputText} from "./InputText";
import {AppRootStateType} from './state/store';
import {TasksStateType} from './state/task-reducer';


function App() {
    // @ts-ignore
    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch()

    const addTodolist = () => {
        dispatch(addTodolistAC())
    }
    return (
        <div className='Main'>
            <InputText onClick={addTodolist}/>

            {todolists.map((tl: todolistType) => {
                let allTodolistTasks = tasks[tl.id];
                return (
                    <Todolist
                        key={tl.id}
                        name={tl.name}
                        tasks={allTodolistTasks}
                    />
                )
            })}


        </div>
    );
}

export default App;
