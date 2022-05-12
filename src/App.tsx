import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {useDispatch, useSelector} from "react-redux";
import {addTodolistAC, todolistType,} from "./state/todolist-reducer";
import {AppRootStateType} from './state/store';
import {TasksStateType, TaskType} from "./state/task-reducer";

function App() {
    const todolists = useSelector<AppRootStateType, todolistType>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch()

    return (
        <div className='Main'>
            <Todolist title={todolists.title}
                      tasks={tasks}
            />
        </div>
    );
}

export default App;
